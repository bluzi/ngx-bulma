import { Component } from '@angular/core';

@Component({
    selector: 'bu-title',
    template: `
       <h1 class="title">
        <ng-content></ng-content>
       </h1>
    `,
})
export class TitleComponent { }
