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
var router_1 = require('@angular/router');
var NavComponent = (function () {
    function NavComponent(router) {
        this.router = router;
    }
    /**
     * 选择一个nav
     * @param nameKey
     * @param path
     * @param showInDashboard
     */
    NavComponent.prototype.selectSubNav = function (nameKey, path, showInDashboard) {
        console.log(nameKey, path, showInDashboard);
        if (this.popoverArray && this.popoverArray.length > this.popIndex) {
            this.popoverArray[this.popIndex].isOpen = false;
        }
    };
    NavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NavComponent.prototype, "navSubModels", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NavComponent.prototype, "popoverArray", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NavComponent.prototype, "popIndex", void 0);
    NavComponent = __decorate([
        core_1.Component({
            selector: 'mg-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map