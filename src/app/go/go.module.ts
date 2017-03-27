import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { TypeaheadModule, ButtonsModule, AlertModule, TabsModule, PopoverModule } from 'ng2-bootstrap';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

//import { RouterModule } from '@angular/router';


import { NavigatorService } from '../services/navigatorService';

import { GoComponent } from './go.component';
import { NavComponent } from './nav/nav.component';
//import { GoRoutes } from "./go.routers";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './src/app/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    HttpModule,
    JsonpModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot()
    // RouterModule.forChild(GoRoutes)
  ],
  declarations: [GoComponent, NavComponent],
  providers: [ControlContainer, NavigatorService],
  bootstrap: [GoComponent]
})
export class GoModule { }
