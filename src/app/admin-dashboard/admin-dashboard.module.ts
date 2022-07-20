import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AdminDashboardRoutingModule } from "./admin-dashboard-routing.module";
import { CategoryComponent } from "./category/category.component";
import { DashboardUiComponent } from "./dashboard-ui/dashboard-ui.component";
import { HeaderComponent } from "./component/header/header.component";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { MediaComponent } from "./media/media.component";
import { PostsComponent } from "./posts/posts.component";
import { VideosComponent } from "./videos/videos.component";
import { ModalComponent } from "./component/modal/modal.component";
import { CKEditorModule } from 'ckeditor4-angular';
import { CreatePostsComponent } from './posts/create-posts/create-posts.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { AvatarComponent } from './component/avatar/avatar.component';
import { InputComponent } from './component/input/input.component';
import { PostsOnboardingComponent } from './posts/posts-onboarding/posts-onboarding.component';


@NgModule({
  declarations: [
    CategoryComponent,
    DashboardUiComponent,
    HeaderComponent,
    SidebarComponent,
    MediaComponent,
    PostsComponent,
    VideosComponent,
    ModalComponent,
    CreatePostsComponent,
    ProfileComponent,
    AvatarComponent,
    InputComponent,
    PostsOnboardingComponent,
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    CKEditorModule
  ]
})
export class AdminDashboardModule {}
