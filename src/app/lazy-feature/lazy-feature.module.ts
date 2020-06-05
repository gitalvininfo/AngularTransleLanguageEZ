import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

import { LazyFeatureRoutingModule } from "./lazy-feature-routing.module";
import { LazyLoadComponent } from "./component/lazy-load.component";

export function customHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "../../assets/i18n/", ".json");
}

@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    CommonModule,
    LazyFeatureRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customHttpLoader,
        deps: [HttpClient],
      },
      isolate: false
    }),
  ],
})
export class LazyFeatureModule {}
