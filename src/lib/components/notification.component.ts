import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bulma-notification',
    template: `
        <div class="notification" [bulmaColor]="color">
            <bulma-delete *ngIf="closeable !== undefined" (click)="close.emit()"></bulma-delete>
            <ng-content></ng-content>
        </div>
    `,
})
export class NotificationComponent {
    @Input() color: string;
    @Input() closeable: Boolean;

    @Output() close = new EventEmitter();
 }
