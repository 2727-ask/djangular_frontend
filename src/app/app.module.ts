import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidepanelComponent } from "./dashboard/sidepanel/sidepanel.component";
import { NavigationbarComponent } from "./components/navigationbar/navigationbar.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { CreateComponent } from "./pages/create/create.component";
import { MediaComponent } from "./pages/media/media.component";
import { CategoryComponent } from "./pages/category/category.component";
import { EditCategoryComponent } from "./pages/category/edit-category/edit-category.component";
import { LogoComponent } from "./components/logo/logo.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NoConnectionComponent } from './components/no-connection/no-connection.component';
import { DeleteCategoryComponent } from './pages/category/delete-category/delete-category.component';
import { SearchCategoryComponent } from './pages/category/search-category/search-category.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { CategoryInterceptorInterceptor } from './admin-dashboard/interceptors/category-interceptor.interceptor'
import { HandleError } from "./helpers/handleError";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidepanelComponent,
    NavigationbarComponent,
    PostsComponent,
    CreateComponent,
    MediaComponent,
    CategoryComponent,
    EditCategoryComponent,
    LogoComponent,
    PaginatorComponent,
    LoaderComponent,
    NoConnectionComponent,
    DeleteCategoryComponent,
    SearchCategoryComponent,
    DisplayCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CategoryInterceptorInterceptor,
      multi: true
    },
    HandleError
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
