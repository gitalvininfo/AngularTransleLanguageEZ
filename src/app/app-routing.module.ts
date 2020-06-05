import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EagerLoadModule } from "./eager-feature/eager-load.module";

const routes: Routes = [
  {
    path: "lazy",
    loadChildren: "./lazy-feature/lazy-feature.module#LazyFeatureModule",
  },
  {
    path: "lazy",
    loadChildren: () => import("./lazy-feature/lazy-feature.module").then(l => l.LazyFeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EagerLoadModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
