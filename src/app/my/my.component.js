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
var forms_1 = require('@angular/forms');
require('rxjs/add/observable/of');
var Observable_1 = require('rxjs/Observable');
var user_1 = require('../model/user');
var MyComponent = (function () {
    function MyComponent(fb) {
        this.fb = fb;
        this.user = new user_1.User();
        this.emails = [
            { email: '344913393@qq.com' },
            { email: 'leedan1130@163.com' },
            { email: 'leehuohuo@yeah.com' }
        ];
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': '邮箱必须输入。',
                'pattern': '请输入正确的邮箱地址。'
            },
            'password': {
                'required': '密码必须输入。',
                'minlength': '密码至少要8位。'
            },
        };
        this.buildForm();
    }
    MyComponent.prototype.ngOnInit = function () {
    };
    MyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //订阅表单值改变事件
        this.form.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    MyComponent.prototype.buildForm = function () {
        this.form = this.fb.group({
            "email": [
                this.user.email,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
                ]
            ],
            "password": [
                this.user.password,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8)
                ]
            ]
        });
    };
    MyComponent.prototype.onValueChanged = function (data) {
        console.log(this.form.value);
        // if (!this.form) return;
        // const f = this.form;
        // for (const field in this.formErrors) {
        //   this.formErrors[field] = '';
        //   const control = f.get(field);
        //   if (control && !control.valid) {
        //     const message = this.validationMessages[field];
        //     for (const key in control.errors) {
        //       this.formErrors[field] += message[key] + ' ';
        //     }
        //   }
        // }
    };
    MyComponent.prototype.onSubmit = function () {
        console.log(this.user.password); // 'Nancy'
        console.log(this.user.email); // {first: 'Nancy', last: 'Drew'}
        console.log(this.form.value); // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
        console.log(this.form.status); // VALID
    };
    MyComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'ig');
        return Observable_1.Observable.of(this.emails.filter(function (state) {
            return query.test(state.email);
        }));
    };
    MyComponent.prototype.changeEmailLoading = function (e) {
        this.typeaheadLoading = e;
    };
    MyComponent.prototype.emailOnSelect = function (e) {
        console.log('Selected value: ', e.value);
    };
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './my.component.html',
            moduleId: module.id,
            styleUrls: ['./my.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=my.component.js.map