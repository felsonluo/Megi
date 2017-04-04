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
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var primeng_1 = require('primeng/primeng');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_translate_1 = require('ng2-translate');
var app_routes_1 = require('./app.routes');
var go_component_1 = require('./go/go.component');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./go/dashboard/dashboard.component');
var contact_component_1 = require('./go/contact/contact.component');
var report_component_1 = require('./go/report/report.component');
var nav_component_1 = require('./go/nav/nav.component');
var navigatorService_1 = require('./services/navigatorService');
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, './src/app/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                ng2_translate_1.TranslateModule.forRoot({
                    provide: ng2_translate_1.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [http_1.Http]
                }),
                http_1.HttpModule,
                http_1.JsonpModule,
                primeng_1.ChartModule,
                primeng_1.PanelModule,
                primeng_1.MenuModule,
                primeng_1.MegaMenuModule,
                ng2_bootstrap_1.ButtonsModule.forRoot(),
                ng2_bootstrap_1.TypeaheadModule.forRoot(),
                ng2_bootstrap_1.TabsModule.forRoot(),
                ng2_bootstrap_1.AlertModule.forRoot(),
                ng2_bootstrap_1.PopoverModule.forRoot(),
                router_1.RouterModule.forRoot(app_routes_1.AppRoutes)
            ],
            declarations: [app_component_1.AppComponent, go_component_1.GoComponent, dashboard_component_1.DashboardComponent, report_component_1.ReportComponent, nav_component_1.NavComponent, contact_component_1.ContactComponent],
            providers: [forms_1.ControlContainer, navigatorService_1.NavigatorService],
            bootstrap: [app_component_1.AppComponent],
            schemas: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map