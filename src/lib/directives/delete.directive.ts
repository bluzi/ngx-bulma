import { Component, Input, HostBinding, Directive } from '@angular/core';

@Directive({
    selector: 'buDelete',
})
export class DeleteDirective {
    @HostBinding('class.delete') private isDelete = true;

    @Input() size;
 }
