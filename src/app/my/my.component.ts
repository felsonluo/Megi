import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch } from 'ng2-bootstrap';
import { User } from '../model/user';

@Component({
  selector: 'my-app',
  templateUrl: './my.component.html',
  moduleId: module.id,
  styleUrls: ['./my.component.css']
})


export class MyComponent implements OnInit, AfterViewInit {

  public form: FormGroup;
  public user: User = new User();

  public asyncSelected: string;
  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  public dataSource: Observable<any>;

  public emails: any[] = [
    { email: '344913393@qq.com' },
    { email: 'leedan1130@163.com' },
    { email: 'leehuohuo@yeah.com' }
  ];

  constructor(
    public fb: FormBuilder) {

    this.buildForm()
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    //订阅表单值改变事件
    this.form.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  public buildForm(): void {
    this.form = this.fb.group({
      "email": [
        this.user.email,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "password": [
        this.user.password,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    });
  }


  onValueChanged(data?: any) {

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
  }

  public formErrors = {
    'email': '',
    'password': '',
  };

  public validationMessages = {
    'email': {
      'required': '邮箱必须输入。',
      'pattern': '请输入正确的邮箱地址。'
    },
    'password': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。'
    },
  };

  public onSubmit() {
    console.log(this.user.password);  // 'Nancy'
    console.log(this.user.email);   // {first: 'Nancy', last: 'Drew'}
    console.log(this.form.value);   // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
    console.log(this.form.status);  // VALID
  }

  public getStatesAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.emails.filter((state: any) => {
        return query.test(state.email);
      })
    );
  }

  public changeEmailLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }


  public emailOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
  }
}