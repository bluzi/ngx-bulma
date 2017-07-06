import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'bu-notification, [buNotification]',
    template: `
        <bu-delete *ngIf="closeable !== undefined" (click)="close.emit()"></bu-delete>
        <ng-content></ng-content>
    `,
    styles: [
        ':host { display: block; }'
    ]
})
export class NotificationComponent {
    @HostBinding('class.notification') private isBox = true;

    @Input() closeable: Boolean;

    @Output() close = new EventEmitter();
 }
