import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../environments/environment";
import { HandleErrorService } from 'src/app/helpers/handle-error.service';
import { Router } from '@angular/router';
import { BlogPost } from '../interfaces/blogpost';


@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private http: HttpClient, private toastr: ToastrService, public handleError: HandleErrorService, private router: Router) { }

  createPost(post:BlogPost) {
    return this.http.post(environment.baseUrl + "/api/blog_post/", {
      "blog_title": post.blog_title,
      "blog_desc": post.blog_desc,
      "content": post.content
    }).pipe(catchError((error: HttpErrorResponse) => this.handleError.handleError(error)));
  }
}
