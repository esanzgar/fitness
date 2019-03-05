import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "prefix", redirectTo: "/auth/login" },
  { path: "auth/login", loadChildren: "./login/login.module#LoginModule" },
  {
    path: "auth/register",
    loadChildren: "./register/register.module#RegisterModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
