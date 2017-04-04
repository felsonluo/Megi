import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, RouterOutletMap } from '@angular/router';

import { PopoverDirective } from 'ng2-bootstrap';

import { Navigator } from '../../model/navigator';

@Component({
  selector: 'mg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  moduleId: module.id
})
export class NavComponent implements OnInit {

  @Input() navSubModels: Navigator[];

  @Input() popoverArray: PopoverDirective[];

  @Input() popIndex: number;

  constructor(
    public router: Router
  ) {

  }

  /**
   * 选择一个nav
   * @param nameKey 
   * @param path 
   * @param showInDashboard 
   */
  public selectSubNav(nameKey: string, path: string, showInDashboard?: boolean): void {

    console.log(nameKey, path, showInDashboard);

    if (this.popoverArray && this.popoverArray.length > this.popIndex) {
      this.popoverArray[this.popIndex].isOpen = false;
    }
  }

  ngOnInit() {
  }
}
