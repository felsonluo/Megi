import { Component, OnInit, ViewChild, AfterViewInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { TranslateService } from 'ng2-translate';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch, AlertModule, TabsetComponent, PopoverDirective } from 'ng2-bootstrap';

import { NavComponent } from './nav/nav.component';



import { NavigatorService } from '../services/navigatorService';

import { User } from '../model/user';
import { Navigator } from '../model/navigator';

@Component({
  selector: 'my-app',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css'],
  moduleId: module.id
})
export class GoComponent implements OnInit {

  @ViewChild(PopoverDirective) popover: PopoverDirective;


  public currentLang: string = 'zh-cn';

  public navTopModels: Navigator[];

  public navBottomModel: Navigator;

  constructor(
    public navigatorService: NavigatorService,
    public translate: TranslateService,
  ) {

    this.translate.addLangs(["zh-cn", "zh-hk", "en"]);
    this.translate.setDefaultLang('zh-cn');

    var langInCookie = localStorage.getItem('mg-lang');
    var browserLang = this.translate.getBrowserLang();
    this.currentLang = langInCookie ? langInCookie : browserLang.match(/zh-cn|en|zh-hk/) ? browserLang : 'zh-cn';
    this.translate.use(this.currentLang);

    localStorage.setItem('mg-lang', this.currentLang);

    this.translate.get('go.common').subscribe(res => {
      document.title = res['MegiManagement'];
    });
  }

  ngOnInit() {
    this.navigatorService.getNavigatorList().subscribe(
      data => {
        this.navBottomModel = data.slice(-1)[0];
        this.navTopModels = data.slice(0,data.length - 1);
        console.log(this.navBottomModel);
        console.log(this.navTopModels);
      }
    );
  }
}
