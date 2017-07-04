import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bulma-tag',
    template: `
        <span class="tag" [bulmaColor]="color" [bulmaSize]="size">
            <ng-content></ng-content>
            <bulma-delete *ngIf="closeable !== undefined" (click)="close.emit()"></bulma-delete>
        </span>
    `,
})
export class TagComponent {
    @Input() size: string;
    @Input() closeable: Boolean;

    @Output() close = new EventEmitter();
}
