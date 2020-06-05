import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "my-learning-app";
  languages = ["en", "es", "fil"];
  currentLang: string;

  constructor(public translate: TranslateService) {
    translate.addLangs(this.languages);
    translate.setDefaultLang(translate.getBrowserLang());
    const browserLang = translate.getBrowserLang().match(/en|es|fil/) ? translate.getBrowserLang() : "en";
    translate.use(browserLang);
    this.currentLang = browserLang;
    // console.log(translate);

    console.log(browserLang)
  }

  public showAlert(val: string) {
    alert(val);
  }

  public toggleTranslationLang(val: string) {
    this.translate.use(val).subscribe((res) => {
      console.log(res);
    });
  }
}
