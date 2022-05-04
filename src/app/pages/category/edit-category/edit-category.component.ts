import { Component, OnInit, Input,  Output, EventEmitter } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { FormControl, FormGroup } from "@angular/forms";
import * as bootstrap from "bootstrap";
import { CategoryService } from "../../../services/category.service";

@Component({
  selector: "app-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.css"]
})


export class EditCategoryComponent implements OnInit {
  @Input() index:number = 0;
  @Input() id: any = "";
  @Input() title: string = "";
  @Input() description: string = "";

  @Output() updateCategoryEvent = new EventEmitter<any>();

  constructor(
    private categoryService: CategoryService,
  ){}


  myid: any = "";
  mytitle: string = "";
  mydesc: string = "";

  modal:any = null;
  

  category = new FormGroup({
    id: new FormControl(""),
    title: new FormControl(""),
    description: new FormControl("")
  });

  ngOnInit(): void {
  }

  addNewCategory(value: any) {
    this.updateCategoryEvent.emit(value);
  }

  openModal(id: any, title: string, description: string, element: any) {
    this.myid = id;
    this.mytitle = title + "hf";
    this.description = description;
    let testModal = new bootstrap.Modal(element);
    this.modal = testModal;
    this.category.setValue({
      id: id,
      title: title,
      description: description
    });
    testModal.show();
  }

  onSubmit() {
    
    this.categoryService
      .putCategories(this.category.value)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.categoryService.handleError(error)
        )
      )
      .subscribe((value:any) => {
        value.index = this.index;
        this.addNewCategory(value);
        this.modal.hide();
        this.categoryService.showSuccess(
          `${value.title} Updated Successfully!!`
        );
      });
  }
}
