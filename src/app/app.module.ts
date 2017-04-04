import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';
import { ChartModule, PanelModule, MenuModule, MenuItem, MegaMenuModule } from 'primeng/primeng';
import { TypeaheadModule, ButtonsModule, AlertModule, TabsModule, PopoverModule } from 'ng2-bootstrap';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppRoutes } from './app.routes';

import { GoComponent } from './go/go.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './go/dashboard/dashboard.component';
import { ContactComponent } from './go/contact/contact.component';
import { ReportComponent } from './go/report/report.component';
import { NavComponent } from './go/nav/nav.component';

import { NavigatorService } from './services/navigatorService';

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
    ChartModule,
    PanelModule,
    MenuModule,
    MegaMenuModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [AppComponent, GoComponent, DashboardComponent, ReportComponent, NavComponent, ContactComponent],
  providers: [ControlContainer, NavigatorService],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {

}
