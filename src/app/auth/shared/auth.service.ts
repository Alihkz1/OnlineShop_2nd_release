import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public set login(v: boolean) {
    this.loggedIn$.next(v);
  }

  public get isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string) {
    return this.http.post('https://tavana-node.herokuapp.com/auth/login', {
      userName: username,
      password: password,
    });
  }
  registerUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string
  ) {
    let token: any = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http.post<any>(
      'https://tavana-node.herokuapp.com/auth/signup',
      { userName: username, password: password }
    );
  }

  isLogged() {
    let tok = localStorage.getItem('token');
    return tok;
  }
}
