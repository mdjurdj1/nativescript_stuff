import {Component, Input, Output, EventEmitter} from "@angular/core"

declare const module;

@Component({
    selector: 'color_sample',
    moduleId: module.id,
    templateUrl: 'color_sampler.component.html',
    styleUrls: ['color_sampler.component.css']
})

export class ColorSample {
    @Input()
    color:string;

    @Output("color")
    colorOutput = new EventEmitter();

    changeColor(input:string) {
       this.color = input
       this.colorOutput.emit(input)
    }
}