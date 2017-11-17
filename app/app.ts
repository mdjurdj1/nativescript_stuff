import {Component, NgModule} from "@angular/core"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {BrowserModule} from "@angular/platform-browser"
import { SearchBox } from "./search-box/search-box.component";
import { ColorPicker } from "./color_picker/color_picker";
import { ColorPreviewer } from "./color_picker/color_previewer";

@Component({
    selector: 'app',
    template: `<search-box placeholder="A thing"></search-box>  <br/> 
        <color-picker #picker color="red" (color)="previewer.color = $event"></color-picker>
        <button (click)="picker.reset()">Reset</button>
        <color-previewer #previewer color="red"></color-previewer>
    `
})
export class App {

}

@NgModule({
    declarations: [App, SearchBox, ColorPicker, ColorPreviewer],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule)