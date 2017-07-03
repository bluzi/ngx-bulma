import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'bulma-box',
    template: `
        <div class="box">
            <article class="media">
                <ng-content></ng-content>
            </article>
        </div>
    `,
})
export class BoxComponent {
}
