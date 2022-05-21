import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { CreateComponent } from "./pages/create/create.component";
import { MediaComponent } from "./pages/media/media.component";
import { CategoryComponent } from "./pages/category/category.component";
import { EditCategoryComponent } from "./pages/category/edit-category/edit-category.component";

const routes: Routes = [
  // { path: '', redirectTo: '/posts', pathMatch: 'full' },
  // {
  //   path: "dashboard",
  //   component: DashboardComponent,
  //   children: [
  //     { path: "posts", component: PostsComponent },
  //     { path: "create", component: CreateComponent },
  //     { path: "media", component: MediaComponent },
  //     { path: "category", component: CategoryComponent },
  //     { path: "editcategory", component: EditCategoryComponent }
  //   ]
  // },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(o => o.AuthModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./admin-dashboard/admin-dashboard.module").then(o => o.AdminDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
