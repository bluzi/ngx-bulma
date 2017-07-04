import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bulma-message',
    template: `
        <article class="message" [bulmaColor]="color">
            <div class="message-header">
                <p *ngIf="header">{{header}}</p>
                <ng-content select="header" *ngIf="!header"></ng-content>
                <bulma-delete *ngIf="closeable !== undefined" (click)="close.emit()"></bulma-delete>
            </div>
            <div class="message-body">
                <ng-content></ng-content>
            </div>
        </article>
    `,
})
export class MessageComponent {
    @Input() color: string;
    @Input() closeable: Boolean;
    @Input() header: string;

    @Output() close = new EventEmitter();
 }
