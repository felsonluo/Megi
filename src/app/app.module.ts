import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AssetsComponent } from './assets/assets.component';
import { UserComponent } from './user/user.component';

import { DropdownModule } from 'ng2-bootstrap'

import { StateService } from './services/state.service';

import appRoutes from './app.routes';
import { StaticComponent } from './static/static.component';


@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    UserModule,
    appRoutes,
    DropdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    AssetsComponent,
    UserComponent,
    HomeComponent,
    StaticComponent
  ],
  bootstrap: [AppComponent],
  providers: [StateService]
})
export class AppModule { }
