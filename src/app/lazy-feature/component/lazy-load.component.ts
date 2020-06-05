import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lazy-load",
  templateUrl: "./lazy-load.component.html",
  styleUrls: ["./lazy-load.component.scss"],
})
export class LazyLoadComponent implements OnInit {
  // languages = ["en", "es", "fil"];
  currentLang: string;

  constructor() {
  }

  ngOnInit(): void {}
}
