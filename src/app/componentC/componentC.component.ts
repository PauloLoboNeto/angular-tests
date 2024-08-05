import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: `<h1 style="color: gray;">C</h1>`,
    selector: 'componentC',
    providers: [CommonModule]
})
export class ComponentC {

}