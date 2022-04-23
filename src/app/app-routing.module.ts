import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CreateComponent } from './pages/create/create.component';
import { MediaComponent } from './pages/media/media.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'dashboard', component: AppComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'media', component: MediaComponent },
  { path: 'category', component: CategoryComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
