import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { CategoryService } from "./services/category.service";
import { CategoryInterceptorInterceptor } from "./interceptors/category-interceptor.interceptor";

@NgModule({
  declarations: [
    CategoryComponent,
    DashboardUiComponent,
    HeaderComponent,
    SidebarComponent,
    MediaComponent,
    PostsComponent,
    VideosComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ]
})
export class AdminDashboardModule {}
