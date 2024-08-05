import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    standalone: true,
    template: `<h1 style="color: gray;">A</h1>`,
    selector: 'componentA',
    providers: [CommonModule]
})
export class ComponentA {

    constructor(private activatedRoute: ActivatedRoute){
        console.log('acomp',this.activatedRoute);
    }
}