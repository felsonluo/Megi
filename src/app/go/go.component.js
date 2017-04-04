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
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_translate_1 = require('ng2-translate');
require('rxjs/add/observable/of');
var navigatorService_1 = require('../services/navigatorService');
var GoComponent = (function () {
    function GoComponent(navigatorService, translate, router) {
        this.navigatorService = navigatorService;
        this.translate = translate;
        this.router = router;
        this.tabs = [];
        this.currentLang = 'zh-cn';
        this.tabName0 = '';
        this.tabName1 = '';
        this.tabName2 = '';
        this.tabName3 = '';
        this.tabName4 = '';
        this.tabName5 = '';
        this.tabName6 = '';
        this.tabName7 = '';
        this.tabName8 = '';
        this.tabName9 = '';
        this.translate.addLangs(["zh-cn", "zh-hk", "en"]);
        this.translate.setDefaultLang('zh-cn');
        var langInCookie = localStorage.getItem('mg-lang');
        var browserLang = this.translate.getBrowserLang();
        this.currentLang = langInCookie ? langInCookie : browserLang.match(/zh-cn|en|zh-hk/) ? browserLang : 'zh-cn';
        this.translate.use(this.currentLang);
        localStorage.setItem('mg-lang', this.currentLang);
        this.translate.get('go.common').subscribe(function (res) {
            document.title = res['MegiManagement'];
        });
    }
    GoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigatorService.getNavigatorList().subscribe(function (data) {
            _this.navModels = data;
            console.log(data);
        });
    };
    GoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //outlet : path
        this.router.navigate(['/go', { outlets: { dashboardOutlet: 'dashboard' } }]);
        this.tabSet.tabs.forEach(function (item, i) {
            if (!item.disabled && i != 0) {
                _this.tabs.push({
                    tab: item,
                    url: "",
                    outlet: 'mgRouter' + (i - 1),
                    index: i - 1
                });
            }
        });
        this.tabs.forEach(function (item, index) {
            _this.tabSet.removeTab(item.tab);
        });
    };
    GoComponent.prototype.blurNav = function (index) {
        if (this.popoverArray && this.popoverArray.length > index)
            this.popoverArray[index].isOpen = false;
    };
    GoComponent.prototype.selectNav = function (index) {
        this.popoverArray = this.popovers.toArray();
        for (var i = 0; i < this.popoverArray.length; i++) {
            if (i !== index) {
                this.popoverArray[i].isOpen = false;
            }
        }
    };
    GoComponent.prototype.addTab = function (title, path) {
        var _this = this;
        var avaliableTab;
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].used !== true) {
                avaliableTab = this.tabs[i];
                break;
            }
        }
        if (avaliableTab) {
            this.tabSet.addTab(avaliableTab.tab);
            avaliableTab.tab.active = true;
            avaliableTab.used = true;
            avaliableTab.nameKey = title;
            var t = this.tabSet.tabs[this.tabSet.tabs.length - 1];
            this.tabSet.tabs[this.tabSet.tabs.length - 1] = this.tabSet.tabs[this.tabSet.tabs.length - 2];
            this.tabSet.tabs[this.tabSet.tabs.length - 2] = t;
            avaliableTab.tab.active = true;
            this.translate.get(title).subscribe(function (res) {
                _this["tabName" + avaliableTab.index] = res;
            });
            var o = {};
            o[avaliableTab.outlet] = path;
            this.router.navigate(['/go', { outlets: o }]);
        }
        else {
            console.log("没有可用的tab了");
        }
    };
    GoComponent.prototype.removeTab = function (index) {
        this.tabs[index].used = false;
    };
    __decorate([
        core_1.ViewChildren(ng2_bootstrap_1.PopoverDirective), 
        __metadata('design:type', core_1.QueryList)
    ], GoComponent.prototype, "popovers", void 0);
    __decorate([
        core_1.ViewChild(ng2_bootstrap_1.TabsetComponent), 
        __metadata('design:type', ng2_bootstrap_1.TabsetComponent)
    ], GoComponent.prototype, "tabSet", void 0);
    GoComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './go.component.html',
            styleUrls: ['./go.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [navigatorService_1.NavigatorService, ng2_translate_1.TranslateService, router_1.Router])
    ], GoComponent);
    return GoComponent;
}());
exports.GoComponent = GoComponent;
//# sourceMappingURL=go.component.js.map