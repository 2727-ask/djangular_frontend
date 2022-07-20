import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationbarComponent } from "./components/navigationbar/navigationbar.component";
import { LogoComponent } from "./components/logo/logo.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NoConnectionComponent } from './components/no-connection/no-connection.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { HandleError } from "./helpers/handleError";
import { CategoryInterceptorInterceptor } from "./admin-dashboard/interceptors/category-interceptor.interceptor";
import { AvatarComponent } from './components/avatar/avatar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    LogoComponent,
    PaginatorComponent,
    LoaderComponent,
    NoConnectionComponent,
    DisplayCardComponent,
    AvatarComponent,
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
