import { Component } from '@angular/core';

@Component({
    selector: 'bulma-subtitle',
    template: `
       <h2 class="subtitle">
        <ng-content></ng-content>
       </h2>
    `,
})
export class SubtitleComponent { }
