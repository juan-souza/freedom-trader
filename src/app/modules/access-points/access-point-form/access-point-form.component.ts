import { Component, OnInit } from "@angular/core";
import { AccessPointService } from "../services/acess-point.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { AccessPoint } from "../models/AccessPoint";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsValidations } from "../../shared/forms-validations";

@Component({
  selector: "app-access-point-form",
  templateUrl: "./access-point-form.component.html",
  styleUrls: ["./access-point-form.component.scss"],
})
export class AccessPointFormComponent implements OnInit {
  forms: FormGroup;
  accessPoint: AccessPoint;
  exchanges = [];
  errors: string[];
  edition: boolean;
  idBinance: number = 2;
  tooltipApiKey: string = this.getTooltipApiKey();
  tooltipSecreKey: string = this.getTooltipSecreKey();

  constructor(
    private formBuild: FormBuilder,
    private accessPointService: AccessPointService,
    private toaster: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllExchanges();


    this.forms = this.formBuild.group({
      id: [null],
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      apiKey: [
        null,
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(250),
        ],
      ],
      secretKey: [
        null,
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(250),
        ],
      ],
      exchange: [this.idBinance, [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log(this.forms.value);

    if (this.forms.valid) {
      let msgTitle = `Ponto de Acesso <b>${this.forms.value.name}</b> criado com sucesso!`;
      let msgBody = "";

      if (this.forms.value.id) {
        msgTitle = "Cadastro Atualizado com sucesso!";
        msgBody = "";
      }

      this.accessPointService.save(this.forms.value).subscribe(
        (res) => {
          this.toaster.success(msgTitle, msgBody, { timeOut: 10000 });
          this.router.navigate(["access-points"]);
        },
        (err) => {
          this.errors = [err.error.message];
          this.errors.forEach((e) => {
            this.toaster.error(`${e}`);
          });
        }
      );
    } else {
      FormsValidations.varifyFormsValidations(this.forms);
    }

    // this.accessPointService.insert(this.accessPoint).subscribe(
    //   (data) => {
    //     this.router.navigate(["/access-points/list"]);
    //     this.toaster.success(
    //       `Ponto de Acesso <b>${this.accessPoint.name}</b> criado com sucesso!`
    //     );
    //   },
    //   (err) => {
    //     this.errors = [err.error.message];
    //     this.errors.forEach((element) => {
    //       this.toaster.error(`${element}`);
    //     });
    //   }
    // );
  }

  getAllExchanges() {
    this.accessPointService.getExchanges().subscribe(
      (data) => {
        this.exchanges = data;
      },
      (err) => {
        this.errors = [err.error.message];
        this.errors.forEach((e) => {
          this.toaster.error(`${e}`);
        });
        this.router.navigate(["access-points"]);
      }
    );
  }

  validTouched(formField: string) {
    let field = this.forms.get(formField);
    return FormsValidations.validTouched(field);
  }

  onCancel() {
    this.router.navigate(["access-points"]);
  }

  reset() {
    this.forms.reset();
  }

  getTooltipApiKey(): string {
    return 'Para conectar o Cactus Trade ao mercado, deverá obter a chave da API e a chave secreta da API. Basta entrar no seu mercado e obter as chaves da API no seu perfil. Verifique se marcou os campos ler saldo e efetuar ordens e que não marcou a opção de saque.';
  }

  getTooltipSecreKey(): string {
    return "Como no caso da chave da API, procure a chave secreta da API nas configurações do mercado com que deseja conectar.";
  }
}
