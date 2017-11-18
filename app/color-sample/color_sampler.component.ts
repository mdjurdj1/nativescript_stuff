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
    size:string;

    @Output("color")
    colorOutput = new EventEmitter();

    @Output("size") 
    sizeOutput = new EventEmitter();

    changeColor(input:string) {
       this.color = input
       this.colorOutput.emit(input)
    }

    changeSize(size:string) {
        this.size = size
        this.sizeOutput.emit(size)
    }
}