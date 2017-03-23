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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
var LoginComponent = (function () {
    function LoginComponent() {
        var _this = this;
        this.statesComplex = [
            { email: '344913393@qq.com' },
            { email: 'leedan1130@163.com' },
            { email: 'leehuohuo@yeah.com' }
        ];
        this.dataSource = Observable_1.Observable
            .create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        })
            .mergeMap(function (token) { return _this.getStatesAsObservable(token); });
    }
    LoginComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'ig');
        return Observable_1.Observable.of(this.statesComplex.filter(function (state) {
            return query.test(state.email);
        }));
    };
    LoginComponent.prototype.changeUserNameLoading = function (e) {
        this.typeaheadLoading = e;
    };
    LoginComponent.prototype.userNameOnSelect = function (e) {
        console.log('Selected value: ', e.value);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './login.component.html',
            moduleId: module.id,
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map