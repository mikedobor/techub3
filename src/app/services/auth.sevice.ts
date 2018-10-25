import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService {
    API = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    signUp(user) {
        return this.http.post(this.API, user);
    }

    signIn(username: string, password: string) {
        const user = {username, password};
        return this.http.post(this.API, user);
    }

    signOut() {}

    getToken(): boolean {
        return true;
    }


}