import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { catchError, retry } from "rxjs/operators";
import { CategoryService } from "../../services/category.service";
import { Category } from "../../interfaces/category";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  categories: any = [];

  category = new FormGroup({
    title: new FormControl(""),
    description: new FormControl("")
  });

  addItem(newCaregoryItem: any) {
    this.categories.splice(newCaregoryItem.index,1,newCaregoryItem);
  }

  deleteItem(deleteCategory: any){
    this.categories.splice(deleteCategory.index,1);
  }


  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(value => {
      this.categories = value;
    });
  }

  onSubmit() {
    this.categoryService
      .postCategories(this.category.value)
      .pipe(catchError((error: HttpErrorResponse) => this.categoryService.handleError(error)))
      .subscribe(value => {
        this.categories.push(value);
        this.categoryService.showSuccess(`${this.category.value.title} Added Successfully!!`)
      });
  }

  onUpdate(id: any, title: string, description: string) {
    this.category.setValue({ title: title, description: description });
  }
}
