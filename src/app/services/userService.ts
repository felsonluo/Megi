import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../model/user';

@Injectable()
export class UserService {

    public userListUrl = "src/data/user.json";

    constructor(public http: Http) { }

    public getUserList(postId: number): Observable<User[]> {
        return this.http.get(this.userListUrl)
            .map((res: Response) => res.json())
    }
}