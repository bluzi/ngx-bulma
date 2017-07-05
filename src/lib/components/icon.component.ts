import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'bu-icon',
    template: `
        <i class="fa fa-{{name}}" *ngIf="name"></i>
    `,
})
export class IconComponent { 
    @HostBinding('class.icon') isIcon = true;

    @Input() name;
}
