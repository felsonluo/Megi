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
var Subject_1 = require('rxjs/Subject');
var http_1 = require('@angular/http');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.userLoginURL = 'http://api.mg.local/api/User/Login';
        this.subject = new Subject_1.Subject();
    }
    Object.defineProperty(LoginService.prototype, "currentUser", {
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.login = function (u) {
        var headers = new http_1.Headers();
        headers.append("Accept", "application/json");
        var params = new http_1.URLSearchParams();
        params.set('email', u.email);
        params.set('password', u.password);
        params.set('Email', u.email);
        params.set('Password', u.password);
        var options = new http_1.RequestOptions({ headers: headers, search: params, responseType: http_1.ResponseContentType.Json });
        return this.http
            .get(this.userLoginURL, options)
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem("currentUser");
        this.subject.next(Object.assign({}));
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=loginService.js.map