import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsValidations } from '../../shared/forms-validations';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {


  forms: FormGroup;

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {

    this.forms = this.formBuild.group({
      code: [null],
      createDate: [null],
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      role: [null, [Validators.required]],
      statusInfo: [null, [Validators.required]],
      //status: [null, Validators.required]
    })
  }

  onSubmit() {

    if (this.forms.valid) {
      console.log("Form válido")
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
