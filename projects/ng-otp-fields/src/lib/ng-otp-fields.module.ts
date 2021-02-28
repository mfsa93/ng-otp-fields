import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { NgOtpFieldsComponent } from './ng-otp-fields.component';
import { KeysPipe } from './pipes/keys.pipe';



@NgModule({
  declarations: [NgOtpFieldsComponent, KeysPipe, NumberOnlyDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgOtpFieldsComponent],
  providers: [KeysPipe]
})
export class NgOtpFieldsModule { }
