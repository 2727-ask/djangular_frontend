import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsOnboardingComponent } from './posts-onboarding.component';

describe('PostsOnboardingComponent', () => {
  let component: PostsOnboardingComponent;
  let fixture: ComponentFixture<PostsOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
