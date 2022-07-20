import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HandleErrorService } from 'src/app/helpers/handle-error.service';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  loggedInUser: any;
  headers: HttpHeaders;
  constructor(private http: HttpClient, public handleError: HandleErrorService, private authService: AuthService) {
    this.handleUserInfo();
    this.initializeHeaders();
  }

  handleUserInfo() {
    this.loggedInUser = this.authService.getLoggedInUserInfo();
  }

  initializeHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('token')}`
    });
  }

  getUserProfileInfo() {
    return this.http.get(environment.baseUrl + `/api/profile/?q=${this.loggedInUser.user_id}`).pipe(catchError((error: HttpErrorResponse) => this.handleError.handleError(error)));
  }

  createProfile() {
    return this.http.post(environment.baseUrl + "/api/profile/", {
      "user": this.loggedInUser.user_id
    }, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => this.handleError.handleError(error)));
  }


  updateProfile(profile: Profile) {
    console.log(profile);
    return this.http.patch(environment.baseUrl + "/api/profile/", {
      "name": profile.name,
      "bio": profile.bio,
      "github": profile.github,
      "social": profile.social,
      "location": profile.location,
    }, { headers: this.headers }).pipe(catchError((error: HttpErrorResponse) => this.handleError.handleError(error)));
  }
}
