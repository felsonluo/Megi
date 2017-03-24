import { Component, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ng2-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html',
  moduleId: module.id,
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  public asyncSelected: string;
  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  public dataSource: Observable<any>;
  complexForm: FormGroup;

  form = new FormGroup({
    userName: new FormControl('a',Validators.minLength(2)),
    password: new FormControl('b')
  })

  public statesComplex: any[] = [
    { email: '344913393@qq.com' },
    { email: 'leedan1130@163.com' },
    { email: 'leehuohuo@yeah.com' }
  ];

  public constructor(fb: FormBuilder) {
    this.dataSource = Observable
      .create((observer: any) => {
        // Runs on every search
        observer.next(this.asyncSelected);
      })
      .mergeMap((token: string) => this.getStatesAsObservable(token));


  }

  setValue() { this.form.setValue({first: 'Carson', last: 'Drew'}); }

  onSubmit(): void {
    console.log(this.form.value);  // {first: 'Nancy', last: 'Drew'}
  }

  public getStatesAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.statesComplex.filter((state: any) => {
        return query.test(state.email);
      })
    );
  }

  public changeUserNameLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }


  public userNameOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
  }
}