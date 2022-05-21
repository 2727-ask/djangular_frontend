import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit { 
  constructor() { }
  categoryData:FormGroup;
  ngOnInit(): void {
    this.categoryData = new FormGroup({
      title: new FormControl(""),
      description: new FormControl("")
    });
  }
  
  

}
