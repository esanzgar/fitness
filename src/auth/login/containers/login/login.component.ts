import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "fitness-login",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  error: string | null = null;
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  async login(credentials: FormGroup) {
    const { email, password } = credentials.value;
    this.error = null;
    try {
      await this._auth.login(email, password);
      this._router.navigate(["/"]);
    } catch (error) {
      this.error = error.message;
    }
  }
}
