"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var home_module_1 = require('./home/home.module');
var user_module_1 = require('./user/user.module');
var about_module_1 = require('./about/about.module');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var assets_component_1 = require('./assets/assets.component');
var user_component_1 = require('./user/user.component');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var state_service_1 = require('./services/state.service');
var app_routes_1 = require('./app.routes');
var static_component_1 = require('./static/static.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                home_module_1.HomeModule,
                about_module_1.AboutModule,
                user_module_1.UserModule,
                app_routes_1.default,
                ng2_bootstrap_1.DropdownModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                assets_component_1.AssetsComponent,
                user_component_1.UserComponent,
                home_component_1.HomeComponent,
                static_component_1.StaticComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [state_service_1.StateService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map