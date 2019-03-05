import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { firebaseConfig } from "../environments/environment";

import { AuthService } from "./services/auth.service";
import { UserAuthenticatedGuard } from "./guards/user-authenticated.guard";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService, UserAuthenticatedGuard]
})
export class AuthModule {}
