import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ControlContainer, ReactiveFormsModule } from '@angular/forms';

import { TypeaheadModule, ButtonsModule } from 'ng2-bootstrap';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { LoginComponent } from './login.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LoginService } from '../services/loginService';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './src/app/i18n', '.json');
}


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    HttpModule,
    JsonpModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [
    LoginComponent,
  ],
  bootstrap: [LoginComponent],
  providers: [ControlContainer, CookieService, LoginService]
})

export class LoginModule {

}