import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "fitness-nav",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
