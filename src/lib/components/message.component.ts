import { Component, Input, Output, EventEmitter, HostBinding, Directive } from '@angular/core';

@Component({
    selector: 'bu-message',
    template: `
        <div class="message-header">
            <p *ngIf="header">{{header}}</p>
            <ng-content select="header" *ngIf="!header"></ng-content>
            <buDelete *ngIf="closeable !== undefined" (click)="close.emit()"></buDelete>
        </div>
        <div class="message-body">
            <ng-content></ng-content>
        </div>
    `,
})
export class MessageComponent {
    @HostBinding('class.message') private isMessage = true;

    @Input() closeable: Boolean;
    @Input() header: string;

    @Output() close = new EventEmitter();
 }
