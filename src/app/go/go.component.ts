import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, Input, ChangeDetectionStrategy, QueryList } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, RouterOutletMap } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { ChartModule, PanelModule, MenuModule, MenuItem, MegaMenuModule } from 'primeng/primeng';
import { TypeaheadMatch, AlertModule, TabsetComponent, PopoverDirective } from 'ng2-bootstrap';


import { TranslateService } from 'ng2-translate';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';



import { NavigatorService } from '../services/navigatorService';

import { User } from '../model/user';
import { Navigator } from '../model/navigator';
import { MgTab } from '../model/tab';

@Component({
  selector: 'my-app',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css'],
  moduleId: module.id
})
export class GoComponent implements OnInit, AfterViewInit {

  @ViewChildren(PopoverDirective) popovers: QueryList<PopoverDirective>;
  @ViewChild(TabsetComponent) tabSet: TabsetComponent;

  public tabs: MgTab[] = [];
  public popoverArray: PopoverDirective[];
  public currentLang: string = 'zh-cn';
  public navModels: Navigator[];

  public tabName0: string = '';
  public tabName1: string = '';
  public tabName2: string = '';
  public tabName3: string = '';
  public tabName4: string = '';
  public tabName5: string = '';
  public tabName6: string = '';
  public tabName7: string = '';
  public tabName8: string = '';
  public tabName9: string = '';


  constructor(
    public navigatorService: NavigatorService,
    public translate: TranslateService,
    public router: Router,
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
        this.navModels = data;
        console.log(data);
      }
    );
  }

  public ngAfterViewInit() {

    //outlet : path
    this.router.navigate(['/go', { outlets: { dashboardOutlet: 'dashboard' } }]);

    this.tabSet.tabs.forEach((item, i) => {

      if (!item.disabled && i != 0) {

        this.tabs.push({
          tab: item,
          url: "",
          outlet: 'mgRouter' + (i - 1),
          index: i - 1
        });

      }
    });

    this.tabs.forEach((item, index) => {

      this.tabSet.removeTab(item.tab);
    });
  }

  public blurNav(index: number) {

    if (this.popoverArray && this.popoverArray.length > index)
      this.popoverArray[index].isOpen = false;
  }


  public selectNav(index: number) {

    this.popoverArray = this.popovers.toArray();

    for (var i = 0; i < this.popoverArray.length; i++) {

      if (i !== index) {
        this.popoverArray[i].isOpen = false;
      }
    }
  }

  public addTab(title: string, path: string) {

    let avaliableTab: MgTab;

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


      let t = this.tabSet.tabs[this.tabSet.tabs.length - 1];
      this.tabSet.tabs[this.tabSet.tabs.length - 1] = this.tabSet.tabs[this.tabSet.tabs.length - 2];
      this.tabSet.tabs[this.tabSet.tabs.length - 2] = t;

      avaliableTab.tab.active = true;

      this.translate.get(title).subscribe(res => {
        this["tabName" + avaliableTab.index] = res;
      });

      let o = {};
      o[avaliableTab.outlet] = path;

      this.router.navigate(['/go', { outlets: o }]);

    }
    else {
      console.log("没有可用的tab了");
    }

  }

  public removeTab(index: number) {

    this.tabs[index].used = false;
  }
}
