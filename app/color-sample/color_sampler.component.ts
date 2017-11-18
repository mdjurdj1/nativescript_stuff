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
    text:string;
}