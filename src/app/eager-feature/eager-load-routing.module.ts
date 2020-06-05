import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EagerFeatureLoadComponent } from "./component/eager-feature-load.component";

const routes: Routes = [
  {
    path: "eager",
    component: EagerFeatureLoadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EagerLoadRoutingModule {}
