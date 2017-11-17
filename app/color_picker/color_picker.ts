import {Component, Input, Output, EventEmitter} from "@angular/core"

declare const module;

@Component({
    selector: "color-picker",
    moduleId: module.id,
    templateUrl: 'color_picker.html',
    styleUrls: ['color_picker.css']
})

export class ColorPicker {

    @Input()
    color:string;

    @Output("color")
    colorOutput = new EventEmitter();

    choose(color:string) {
        this.color = color;
        this.colorOutput.emit(color)
    }

    reset() {
        this.choose('black')
    }
}