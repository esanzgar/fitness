import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "../auth/auth.module";

import { StoreService } from "../store/store.service";

import { AppComponent } from "./containers/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavComponent } from "./components/nav/nav.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
