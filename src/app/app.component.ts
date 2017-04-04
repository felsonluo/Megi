import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { ChartModule, PanelModule, MenuModule, MenuItem, MegaMenuModule } from 'primeng/primeng';
import { TypeaheadMatch, AlertModule, TabsetComponent, PopoverDirective } from 'ng2-bootstrap';

@Component({
  selector: 'mg-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
