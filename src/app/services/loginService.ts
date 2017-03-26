import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../model/user';

@Injectable()
export class LoginService {
    public userLoginURL = 'src/app/data/user.json';
    public subject: Subject<User> = new Subject<User>();

    constructor(public http: Http) { }

    public get currentUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public login(u: User, func: Function) {


        var success: boolean;

        this.http
            .get(this.userLoginURL)
            .map((response: Response) => {
                let userJson = response.json();
                console.log("user object>" + userJson);
                if (userJson && userJson.users) {

                    userJson.users.map((user: User) => {

                        if (user.email === u.email && user.password === u.password) {
                            localStorage.setItem("currentUser", JSON.stringify(user));
                            this.subject.next(Object.assign({}, user));
                            console.log("login success>");
                            success = true;
                            return;
                        }
                        else {
                            success = success || false;
                        }
                    });
                }

                if (success) {
                    console.log(success);
                }

                return response;
            })
            .subscribe(
            data => {
                func();
            },
            error => {
                console.error(error);
            }
            );
        return success;
    }

    public logout(): void {
        localStorage.removeItem("currentUser");
        this.subject.next(Object.assign({}));
    }
}
