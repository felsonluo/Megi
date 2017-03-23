import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TypeaheadModule, ButtonsModule } from 'ng2-bootstrap'

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [
    LoginComponent,
  ],
  bootstrap: [LoginComponent],
  providers: []
})

export class LoginModule {

}