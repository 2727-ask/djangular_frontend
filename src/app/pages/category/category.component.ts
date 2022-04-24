import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) {}

  categories: any;

  category = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((category:any) => {
      this.categories = category.data;
      console.log(this.categories);
    })
  }

  onSubmit(){
    console.log(this.category.value);
  }

  onUpdate(id:string,title:string,description:string){
    this.category.setValue({"title":title, "description":description});
  }

  

}