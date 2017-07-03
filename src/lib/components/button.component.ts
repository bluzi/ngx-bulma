import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'bulma-button',
    template: `
        <a class="button" 
                          [bulmaColor]="color"

                          [bulmaSize]="size"

                          [class.is-link]="isLink !== undefined"
                          
                          [class.is-outlined]="outlined !== undefined"

                          [class.is-inverted]="inverted !== undefined"
                          
                          [class.is-loading]="loading !== undefined">
            <ng-content></ng-content>
        </a>
    `,
})
export class ButtonComponent {
    @Input() isLink: boolean;    
    @Input() color: string;
    @Input() size: string;
    @Input() outlined: boolean;
    @Input() inverted: boolean;
    @Input() loading: boolean;
}
