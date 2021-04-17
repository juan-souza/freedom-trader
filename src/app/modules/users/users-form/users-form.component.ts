import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      role: [null, Validators.required],
      statusInfo: [null, Validators.required],
      status: [null, Validators.required]
    })
  }

  onSubmit() { }

  reset() {
    this.forms.reset();
  }

  hasErrorForms(field: string) {
    return {
      'is-invalid': this.validTouched(field)
    }
  }

  validTouched(formField: string) {
    let field = this.forms.get(formField);
    return (!field.valid && (field.touched || field.dirty))
  }

}
