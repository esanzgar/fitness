import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { User } from "../../../auth/services/auth.service";

@Component({
  selector: "fitness-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input()
  user: User | null = null;

  @Output()
  logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }

  ngOnInit() {}
}
