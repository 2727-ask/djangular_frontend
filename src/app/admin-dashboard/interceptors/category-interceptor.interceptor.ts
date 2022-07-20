import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpEventType,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { CategoryService } from "../services/category.service";

@Injectable()
export class CategoryInterceptorInterceptor implements HttpInterceptor {
  constructor(private cs: CategoryService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Interceptor called");
    return next.handle(request).pipe(
      tap(event => {
        this.cs.isLoading.next(true);
        if (event.type == HttpEventType.Response) {
          if (event.status == 200) {
            this.cs.isLoading.next(false);
          }
        }
      })
    );
  }
}
