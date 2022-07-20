import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-onboarding',
  templateUrl: './posts-onboarding.component.html',
  styleUrls: ['./posts-onboarding.component.css']
})
export class PostsOnboardingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  post_info = new FormGroup({
    title: new FormControl('', { validators: [Validators.required, Validators.minLength(10)] })
  })

  handleSetPostTitle(post_info: FormGroup) {
    if (post_info.valid) {
      console.log(post_info.value);
    }
  }

}
