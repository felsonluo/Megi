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
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var my_component_1 = require('./my.component');
var MyModule = (function () {
    function MyModule() {
    }
    MyModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng2_bootstrap_1.ButtonsModule.forRoot(),
                ng2_bootstrap_1.TypeaheadModule.forRoot()
            ],
            declarations: [my_component_1.MyComponent],
            bootstrap: [my_component_1.MyComponent],
            providers: [forms_1.ControlContainer]
        }), 
        __metadata('design:paramtypes', [])
    ], MyModule);
    return MyModule;
}());
exports.MyModule = MyModule;
//# sourceMappingURL=my.module.js.map