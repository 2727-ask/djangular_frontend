import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import * as bootstrap from "bootstrap";
import { catchError, retry } from "rxjs/operators";
import { CategoryService } from "../../../services/category.service";

@Component({
  selector: "app-delete-category",
  templateUrl: "./delete-category.component.html",
  styleUrls: ["./delete-category.component.css"]
})
export class DeleteCategoryComponent implements OnInit {
  @Input() index: number = 0;
  @Input() id: number = 0;
  @Input() title: string = "";
  @Output() deleteCategoryEvent = new EventEmitter<any>();
  constructor(private categoryService: CategoryService) {}
  modal: any = null;
  ngOnInit(): void {}

  manipulateCategory(value: any) {
    this.deleteCategoryEvent.emit(value);
  }

  openModal(id: number, title: string, element: any) {
    let modal = new bootstrap.Modal(element);
    this.modal = modal;
    modal.show();
  }

  onDelete(id: number, index: number) {
    this.categoryService
      .deleteCategory(id)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.categoryService.handleError(error)
        )
      )
      .subscribe((value: any) => {
        value.index = this.index;
        this.manipulateCategory(value);
        this.modal.hide();
        this.categoryService.showSuccess(
          `${this.title} Deleted Successfully!!`
        );
      });
  }
}
