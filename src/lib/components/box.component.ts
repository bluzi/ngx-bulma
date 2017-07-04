import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'bulma-box',
    template: `
        <article class="media">
            <ng-content></ng-content>
        </article>
    `,
})
export class BoxComponent {
    @HostBinding('class.box') isBox = true;
}
