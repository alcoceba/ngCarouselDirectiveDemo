import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {CarouselComponent} from "./carousel/carousel.component";

const routes: Routes = [
    {path: "", redirectTo: "/carousel", pathMatch: "full"},
    {path: "carousel", component: CarouselComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}