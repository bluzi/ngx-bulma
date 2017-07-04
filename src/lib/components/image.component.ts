import { Component, Input } from '@angular/core';

@Component({
    selector: 'bulma-image',
    template: `
        <figure class="image">
            <img [src]="src">
        </figure>
    `,
})
export class ImageComponent { 
    @Input() src;
}
