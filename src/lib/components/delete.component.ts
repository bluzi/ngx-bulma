import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'bu-delete',
    template: ``,
})
export class DeleteComponent {
    @HostBinding('class.delete') isDelete = true;

    @Input() size;
 }
