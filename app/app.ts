import {Component, NgModule} from "@angular/core"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {BrowserModule} from "@angular/platform-browser"
import { ColorSample } from "./color-sample/color_sampler.component";


@Component({
    selector: 'app',
    template: `<color_sample color="red"></color_sample>
    `
})
export class App {

}

@NgModule({
    declarations: [App, ColorSample],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule)