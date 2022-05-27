import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit { 
  constructor( private categoryService: CategoryService,) { }
  categoryData:FormGroup;
  categoriesList:Array<any> = [];
  ngOnInit(): void {
    this.categoryData = new FormGroup({
      title: new FormControl(""),
      description: new FormControl("")
    });
    this.categoryService.fetchCategories()
    this.categoryService.getCategoryStore().subscribe((data:any)=>{
      this.categoriesList = [...this.categoriesList,...data];
    })
  }

  onScroll(){
    console.log("Scrolled");
    this.categoryService.fetchCategories();
  }
}
