import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsUtils } from '../../shared/forms-utils';
import { FormsValidations } from '../../shared/forms-validations';
import { Roles } from '../models/enum/roles';
import { UserStatuInfo } from '../models/enum/userStatusInfo';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {


  forms: FormGroup;
  user: User;
  roles = FormsUtils.enumSelector(Roles);
  statusInfo = FormsUtils.enumSelector(UserStatuInfo)
  selectedRole = Roles.GUEST;
  selectedStatusInfo = UserStatuInfo.PENDING_CONFIRM_EMAIL;
  errors: string[];


  constructor(
    private formBuild: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.forms = this.formBuild.group({
      code: [null],
      createDate: [null],
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      role: [this.selectedRole, [Validators.required]],
      statusInfo: [this.selectedStatusInfo, [Validators.required]],
      status: [true, Validators.required]
    })

  }

  onSubmit() {

    if (this.forms.valid) {
      this.userService.insert(JSON.stringify(this.forms.value))
        .subscribe(res => {
          this.toastr.success('Cadastro foi realizado com sucesso!'
            , 'Usuário receberá um e-mail para confirmar sua conta!', { timeOut: 10000, })
        }, err => {
          this.errors = [err.error.message];
          this.errors.forEach(e => {
            this.toastr.error(`${e}`)
          })
        })
    } else {
      FormsValidations.varifyFormsValidations(this.forms)
    }
  }


  validTouched(formField: string) {
    let field = this.forms.get(formField);
    return FormsValidations.validTouched(field);
  }


  reset() {
    this.forms.reset();
  }



}
