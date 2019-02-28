import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, pluck } from "rxjs/operators";

import { User } from "../auth/services/auth.service";

export interface Store {
  user: User | null;
}

type PropStore = keyof Store;
type PartialStore = Partial<Store>;

const state: Store = {
  user: null
};

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private subject = new BehaviorSubject<Store>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  constructor() {}

  get state(): Store {
    return this.subject.value;
  }

  select<K extends keyof Store>(prop: K): Observable<Store[K]> {
    return this.store.pipe(pluck(prop));
  }

  set<K extends keyof Store>(prop: K, newState: Store[K]) {
    this.subject.next({ ...this.state, [prop]: newState });
  }
}
