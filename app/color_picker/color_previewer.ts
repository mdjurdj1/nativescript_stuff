import {Component, Input} from "@angular/core"

@Component({
    selector: 'color-previewer',
    template: `
        <div class="color-previewer" [ngStyle]="{'color': color}">Preview DAT text!</div>    
    `
})

export class ColorPreviewer {

    @Input()
    color:string;
}