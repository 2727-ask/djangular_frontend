import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import jwt_decode from "jwt-decode";
import { environment } from "../../environments/environment"
import { HandleErrorService } from '../helpers/handle-error.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  constructor(private http: HttpClient, public handleError: HandleErrorService, private router: Router) { }


  loginUser(username: String, password: String) {
    return this.http.post(environment.baseUrl + "/auth-jwt", {
      "username": username,
      "password": password
    }).pipe(catchError((error: HttpErrorResponse) => this.handleError.handleError(error)));
  }

  createUser(username: String, password: String) {
    console.log("Username is", username, password);
    return this.http.post(environment.baseUrl + "/api/signup/", {
      "username": username,
      "password": password
    }).pipe(catchError((error: HttpErrorResponse) => this.handleError.handleError(error)));
  }

  getLoggedInUserInfo() {
    var decoded: any = jwt_decode(localStorage.getItem("token")!);
    return decoded;
  }


  logOutUser() {
    localStorage.removeItem("token");
    this.router.navigate(['/auth']);
  }

  isLoggedIn() {
    var decoded: any = jwt_decode(localStorage.getItem("token")!);
    return (decoded.exp > Date.now() / 1000);
  }




}



