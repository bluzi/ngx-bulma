import { Component, Input } from '@angular/core';

@Component({
    selector: 'bulma-progress',
    template: `
        <progress class="progress" [value]="value" [max]="max" [bulmaColor]="color" [bulmaSize]="size">{{value}}</progress>
    `,
})
export class ProgressComponent {
    @Input() size;
    @Input() color;
    @Input() value: number;
    @Input() max = 100;
 }
