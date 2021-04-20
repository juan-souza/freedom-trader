import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsValidations } from '../forms-validations';

@Component({
  selector: 'app-field-error-msg',
  templateUrl: './field-error-msg.component.html',
  styleUrls: ['./field-error-msg.component.scss']
})
export class FieldErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }


  get errorMessage() {

    for (const propertyName in this.control.errors) {

      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormsValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName])
      }

    }

    return null

  }


}
