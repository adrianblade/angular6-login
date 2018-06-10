import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<string> {
      const body = `username=${username}&password=${password}`;
      const options = {
        headers: new HttpHeaders({ 'Content-Type': 'text/plain' }),
        responseType: 'text' as 'text'
      };
      return this.http.post('http://10.12.0.62:3000/auth/login?username=SSCC&password=SSCC1234', body, options);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
