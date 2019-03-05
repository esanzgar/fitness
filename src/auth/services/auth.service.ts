import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

import { AngularFireAuth } from "@angular/fire/auth";
import { StoreService } from "../../store/store.service";

export interface User {
  email: string | null;
  uid: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _user$ = this._af.authState.pipe(
    tap(user => {
      if (user === null) {
        this._store.set("user", user);
        return;
      }
      this._store.set("user", { email: user.email, uid: user.uid });
    })
  );

  get user() {
    return this._user$;
  }

  constructor(private _af: AngularFireAuth, private _store: StoreService) {}

  login(email: string, password: string) {
    return this._af.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this._af.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this._af.auth.signOut();
  }
}
