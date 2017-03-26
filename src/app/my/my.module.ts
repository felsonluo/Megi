import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ControlContainer, ReactiveFormsModule } from '@angular/forms';

import { TypeaheadModule, ButtonsModule } from 'ng2-bootstrap'


import { MyComponent } from './my.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [MyComponent],
  bootstrap: [MyComponent],
  providers: [ControlContainer]
})
export class MyModule { }
