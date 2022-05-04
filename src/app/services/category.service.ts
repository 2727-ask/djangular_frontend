import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../environments/environment";
import { Category } from "../interfaces/category";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.fetchCategories();
  }

  private categories = new BehaviorSubject([]);

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error("An error occurred:", error.error);
      this.showError("No Internet Connection!");
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      (Math.floor(error.status/100)===4)
        ? this.showError(`${error.status} Invalid Request`)
        : this.showError(`${error.status} Internal Server Error`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error("Something bad happened; please try again later.")
    );
  }

  fetchCategories() {
    this.http
      .get(environment.baseUrl + "/category")
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)))
      .subscribe((val: any) => {
        this.categories.next(val.data);
      });
  }

  postCategories(category: Category) {
    return this.http.post(environment.baseUrl + "/category", category);
  }

  putCategories(category: Category){
    return this.http.put(environment.baseUrl + `/category/${category.id}`, category);
  }

  deleteCategory(id: number){
    return this.http.delete(environment.baseUrl+`/category/${id}`)
  }

  showSuccess(msg: string) {
    this.toastr.success(msg);
  }

  showError(msg: string) {
    this.toastr.error(msg);
  }

  getCategories() {
    return this.categories;
  }
}
