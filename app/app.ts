import {Component, NgModule} from "@angular/core"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {BrowserModule} from "@angular/platform-browser"
import { ColorSample } from "./color-sample/color_sampler.component";


@Component({
    selector: 'app',
    template: `<color_sample #sampler></color_sample>
    <br />
    Color: <input #colorField (keyup)='sampler.color = colorField.value'> <br/>
    Radius: <input #sizeField (keyup)='sampler.size = sizeField.value'>  <br/>
    Text: <input #textField (keyup)='sampler.text = functionz(textField.value)'> 
    `
})
export class App {
    functionz(input:string) {
        if(input.length > 3) {
            return input
        } else {
            return ""
        }
    }
}

@NgModule({
    declarations: [App, ColorSample],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule)