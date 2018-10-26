import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('/auth/login', { username: username, password: password })
    }

    getAdvertiserByProduct(products:String) {
        console.log("Search services",products);
        return this.http.get('/advertisers/products/' + products,{});
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}