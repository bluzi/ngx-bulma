import { Component, Input } from '@angular/core';

@Component({
    selector: 'bu-image',
    template: `
        <figure class="image">
            <img [src]="src" />>
        </figure>
    `,
})
export class ImageComponent { 
    @Input() src;
}
