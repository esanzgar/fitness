import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class UserAuthenticatedGuard implements CanActivate {
  constructor(private _router: Router, private _auth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._auth.user.pipe(
      map(user => !!user),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this._router.navigate(["/auth"]);
        }
      })
    );
  }
}
