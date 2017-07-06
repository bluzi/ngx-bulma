import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'bu-tag',
    template: `
        <ng-content></ng-content>
        <bu-delete *ngIf="closeable !== undefined" (click)="close.emit()"></bu-delete>
    `,
})
export class TagComponent {
    @HostBinding('class.tag') private isTag = true;

    @Input() closeable: Boolean;

    @Output() close = new EventEmitter();
}
