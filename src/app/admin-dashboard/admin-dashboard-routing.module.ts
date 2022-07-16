import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { MediaComponent } from "./media/media.component";
import { PostsComponent } from "./posts/posts.component";
import { VideosComponent } from "./videos/videos.component";
import { DashboardUiComponent } from "./dashboard-ui/dashboard-ui.component";
import { CreatePostsComponent } from "./posts/create-posts/create-posts.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardUiComponent,
    children: [
      { path: "posts", component: PostsComponent },
      { path: "categorys", component: CategoryComponent },
      { path: "videos", component: VideosComponent },
      { path: "media", component: MediaComponent },
      { path: "posts/create", component: CreatePostsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
