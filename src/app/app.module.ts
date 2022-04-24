import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidepanelComponent } from './dashboard/sidepanel/sidepanel.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CreateComponent } from './pages/create/create.component';
import { MediaComponent } from './pages/media/media.component';
import { CategoryComponent } from './pages/category/category.component';
import { EditCategoryComponent } from './pages/category/edit-category/edit-category.component';
import { LogoComponent } from './components/logo/logo.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
