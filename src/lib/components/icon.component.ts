import { Component, Input } from '@angular/core';

@Component({
    selector: 'bulma-icon',
    template: `
        <span class="icon" [bulmaSize]="size">
            <i class="fa fa-{{name}}" *ngIf="name"></i>
        </span>
    `,
})
export class IconComponent { 
    @Input() name;
    @Input() size;
}
