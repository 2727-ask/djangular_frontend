import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {
  constructor(private toastr: ToastrService) { }
  handleError(error: any) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error("An error occurred:", error.error);
      this.showError("No Internet Connection!");
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      (Math.floor(error.status / 100) === 4)
        ? ((error.error.msg) ? this.showError(`${error.error.msg}`) : null)
        : this.showError(`${error.status} Internal Server Error`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => { this.showError(`${error.error.detail}`);console.log(error);
      }
    );
  }

  showSuccess(msg: string) {
    this.toastr.success(msg);
  }

  showError(msg: string) {
    this.toastr.error(msg);
  }
}
