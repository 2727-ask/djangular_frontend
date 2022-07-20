import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private categories_store:any = new BehaviorSubject([])
  isLoading = new BehaviorSubject<boolean>(false)
  next:string = environment.baseUrl+"/category?page=1";


  fetchCategories() {
    if(this.next != null){
      this.http.get(this.next).subscribe((data:any)=>{ 
        this.next = data.next;
        this.categories_store.next([...data.results.data]);
      })
    } 
  }

  getCategoryStore(){
    return this.categories_store;
  }

  
}
