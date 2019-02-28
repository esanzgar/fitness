import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Observable } from "rxjs";

import { StoreService } from "../../store/store.service";
import { AuthService, User } from "../../auth/services/auth.service";

@Component({
  selector: "fitness-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  user$!: Observable<User | null>;
  private _subscription!: Subscription;

  constructor(private _store: StoreService, private _auth: AuthService) {}

  ngOnInit() {
    this._subscription = this._auth.user.subscribe();
    this.user$ = this._store.select("user");
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
