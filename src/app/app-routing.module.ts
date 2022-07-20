import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(o => o.AuthModule)
  },
  {
    path: "dashboard",
    canActivate: [AuthGuard], 
    loadChildren: () => import("./admin-dashboard/admin-dashboard.module").then(o => o.AdminDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
