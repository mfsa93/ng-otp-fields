# NgOtpFields

A lightweight and highly customizable Angular OTP component.

[![Build Status](https://travis-ci.com/mfsa93/ng-otp-fields.svg?branch=master)](https://travis-ci.com/mfsa93/ng-otp-fields)


## Install

```
$ npm install --save ng-otp-fields
```

## Usage

```js
// in app.module.ts
import { NgOtpFieldsModule } from 'ng-otp-fields';

@NgModule({
  ...
  imports: [
    NgOtpFieldsModule
  ],
  ...
})
export class AppModule { }
```

```html
<!-- in app.component.html -->
<ng-otp-fields  (onInputChange)="onOtpChange($event)"  [config]="config"></ng-otp-fields>
```

```js
// in app.component.ts
config: Config = {
  length:8, 
  inputClass: 'input', 
  containerClass: 'input--key',
  allowNumbersOnly: true, 
  isPasswordInput: true
 }

onOtpChange(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

```

## Component documentation

#### ng-otp-input

This component has the following Input properties:

* `[config]`: Configuration object.

It has the following Output event:

* `(onInputChange)`: Emitted when any input is changed. It returns a `NgxDropzoneChangeEvent` with the properties `source: NgxDropzoneComponent`, `addedFiles: File[]` and `rejectedFiles: RejectedFile[]`.


#### Configuration object

```js
// configuration object

{
    inputStyles?: {[key: string]: any}; // default empty
    containerStyles?: {[key: string]: any}; // default empty
    allowKeyCodes?: string[]; // default empty
    length: number; // default 4
    allowNumbersOnly?: boolean; // default false
    inputClass?: string; // default empty
    containerClass?: string; // default empty
    isPasswordInput?: boolean; // default false
    disableAutoFocus?: boolean; // default false
    placeholder?: string; // default empty
}

```

## Licence

MIT ©
