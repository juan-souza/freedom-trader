import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { map, switchMap } from "rxjs/operators";
import { FormsUtils } from "../../shared/forms-utils";
import { FormsValidations } from "../../shared/forms-validations";
import { Roles } from "../models/enum/roles";
import { UserStatuInfo } from "../models/enum/userStatusInfo";
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-users-form",
  templateUrl: "./users-form.component.html",
  styleUrls: ["./users-form.component.scss"],
})
export class UsersFormComponent implements OnInit {
  forms: FormGroup;
  user: User;
  roles = FormsUtils.enumSelector(Roles);
  statusInfo = FormsUtils.enumSelector(UserStatuInfo);
  selectedRole = Roles.GUEST;
  selectedStatusInfo = UserStatuInfo.PENDING_CONFIRM_EMAIL;
  errors: string[];

  constructor(
    private formBuild: FormBuilder,
    private userService: UserService,
    private toaster: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //Verifica Rota de Editar
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => {
          if (id !== undefined) {
            return this.userService.findById(id)
          }
          return [];
        }
        )
      )
      .subscribe(user => this.updateForm(user))

    this.forms = this.formBuild.group({
      id: [{ value: null }],
      createDate: [{ value: null, disabled: true }],
      name: [null, [Validators.required, Validators.maxLength(250)]],
      email: [
        null,
        [Validators.required, Validators.email, Validators.maxLength(250)],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(250),
        ],
      ],
      role: [this.selectedRole, [Validators.required]],
      statusInfo: [this.selectedStatusInfo, [Validators.required]],
      status: [true, Validators.required],
    });

  }

  updateForm(user: User) {
    this.forms
      .patchValue(
        {
          id: user.id,
          name: user.name,
          password: user.password,
          email: user.email,
          role: user.role,
          statusInfo: user.statusInfo,
          active: user.active,
          createDate: formatDate(user.createDate, 'dd-MM-yyyy', 'pt-BR')
        }
      )
  }

  onSubmit() {
    if (this.forms.valid) {

      let msgTitle = "Cadastro foi realizado com sucesso!";
      let msgBody = "Usuário receberá um e-mail para confirmar sua conta!"

      if (this.forms.value.id) {
        msgTitle = "Cadastro Atualizado com sucesso!"
        msgBody = ""
      }

      this.userService.save(this.forms.value)
        .subscribe(res => {
          this.toaster.success(msgTitle, msgBody, { timeOut: 10000 });
          this.router.navigate(["users/"]);
        }, err => {
          this.errors = [err.error.message];
          this.errors.forEach((e) => {
            this.toaster.error(`${e}`);
          });

        })
    } else {
      FormsValidations.varifyFormsValidations(this.forms);
    }
  }

  validTouched(formField: string) {
    let field = this.forms.get(formField);
    return FormsValidations.validTouched(field);
  }

  onCancel() {
    this.router.navigate(['users/'])
  }

  reset() {
    this.forms.reset();
  }
}
