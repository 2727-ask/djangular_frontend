import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { HandleErrorService } from 'src/app/helpers/handle-error.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpGenericService {

  constructor(private http: HttpClient, public handleError: HandleErrorService, private authService: AuthService) { }

  handlePost(endPoint:string, body:any, headers: any) {
    return this.http.post(environment.baseUrl + endPoint, body, headers).pipe(catchError((error: HttpErrorResponse) => this.handleError.handleError(error)));
  }


}
