import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'bu-delete',
    template: ``,
})
export class DeleteComponent {
    @HostBinding('class.delete') private isDelete = true;

    @Input() size;
 }
