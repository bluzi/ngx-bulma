import { Component, Input, HostBinding, Directive } from '@angular/core';

@Component({
    selector: 'bu-box',
    template: `
        <article class="media">
            <ng-content></ng-content>
        </article>
    `,
})
export class BoxComponent {
    @HostBinding('class.box') isBox = true;
}

@Directive({
    selector: '[bu-box]',
})
export class BoxDirective extends BoxComponent { }
