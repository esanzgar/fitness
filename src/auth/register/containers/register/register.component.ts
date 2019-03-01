import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "fitness-register",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  error = new BehaviorSubject<string | null>(null);
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  async register(credentials: FormGroup) {
    this.error.next(null);
    const { email, password } = credentials.value;
    try {
      await this._auth.register(email, password);
      this._router.navigate(["/"]);
    } catch (error) {
      this.error.next(error.message);
    }
  }
}
