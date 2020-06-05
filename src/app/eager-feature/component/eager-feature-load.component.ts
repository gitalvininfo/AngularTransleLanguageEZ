import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-eager-feature-load",
  templateUrl: "./eager-feature-load.component.html",
  styleUrls: ["./eager-feature-load.component.scss"],
})
export class EagerFeatureLoadComponent implements OnInit {
  languages = ["en", "es"];

  constructor() {
  }

  ngOnInit(): void {}
}
