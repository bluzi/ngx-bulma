import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'bu-tag',
    template: `
        <ng-content></ng-content>
        <buDelete *ngIf="closeable !== undefined" (click)="close.emit()"></buDelete>
    `,
})
export class TagComponent {
    @HostBinding('class.tag') private isTag = true;

    @Input() closeable: Boolean;

    @Output() close = new EventEmitter();
}
