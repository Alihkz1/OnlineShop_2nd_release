import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject , Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
 
 public set login(v: boolean) {
   this.loggedIn$.next(v);
 }
 
 public get isLoggedIn() : Observable<boolean> {
   return this.loggedIn$.asObservable();
 }
 
 
  constructor(private http: HttpClient) { }

  loginUser(phone: string, password: string){
    return this.http.post(
      'https://tavana-node.herokuapp.com/auth/login',{userName: phone, password: password}
    )
  }
  registerUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string
  ) {
    let token: any = localStorage.getItem("token");
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token,
    });
    let url = "http://37.152.163.82:4800/auth/signup";
    let body = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    };
    return this.http.post<any>(url, body, { headers });
  }
}
