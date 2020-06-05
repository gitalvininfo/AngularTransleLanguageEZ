import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { EagerLoadRoutingModule } from "./eager-load-routing.module";
import { EagerFeatureLoadComponent } from "./component/eager-feature-load.component";

export function customHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [EagerFeatureLoadComponent],
  imports: [
    CommonModule,
    EagerLoadRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customHttpLoader,
        deps: [HttpClient],
      },
    })
  ],
})
export class EagerLoadModule {}
