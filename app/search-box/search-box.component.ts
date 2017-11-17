import { Component, Input } from "@angular/core"

declare const module;

@Component({
    selector: 'search-box',
    moduleId: module.id,
    templateUrl: 'search-box.component.html',
    styleUrls: ['search-box.component.css']
})
export class SearchBox {

    @Input('placeholder') 
    text = 'Type your search'

    clear(input) {
        console.log('ayy')
        input.value = "";
    }
}