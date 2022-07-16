import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  constructor() { }

  public model = {
    editorData: '<p>Hello, world!</p>'
  };

  categories: Array<Category> = [{
    'id': '1',
    'title': 'Programming',
    'description': 'This is Cool Programming'
  },
  {
    'id': '2',
    'title': 'Hardware',
    'description': 'This is Cool Programming'
  },
  {
    'id': '3',
    'title': 'Software',
    'description': 'This is Cool Programming'
  },
  {
    'id': '4',
    'title': 'Cars',
    'description': 'This is Cool Programming'
  },];

  ngOnInit(): void {
  }

  post = new FormGroup({
    title: new FormControl(""),
    category: new FormControl(""),
    content: new FormControl(""),
  });

  handle_save_post(post: FormGroup) {
    if (post.valid) {
      console.log(post.value.title);
      console.log(post.value.category);
      console.log(post.value.content);
    }
  }

}
