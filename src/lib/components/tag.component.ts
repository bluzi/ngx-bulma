import { Component, Input } from '@angular/core';

@Component({
    selector: 'bulma-tag',
    template: `
        <span class="tag" [bulmaColor]="color" [bulmaSize]="size">
            <ng-content></ng-content>
        </span>
    `,
})
export class TagComponent {
    @Input() size: string;
}
