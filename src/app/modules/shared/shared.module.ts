import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FieldErrorMsgComponent } from './field-error-msg/field-error-msg.component';



@NgModule({
  declarations: [FormDebugComponent, FieldErrorMsgComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormDebugComponent,
    FieldErrorMsgComponent
  ]
})
export class SharedModule { }
