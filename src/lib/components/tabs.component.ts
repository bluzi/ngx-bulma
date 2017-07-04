import { Component, Input, ContentChildren, Directive } from '@angular/core';

@Directive({
    selector: 'bulma-tab',
})
export class TabDirective {
    @Input() header: string;
    @Input() icon: string;

    constructor() { }    
}

 @Component({
    selector: 'bulma-tabs',
    template: `
       <div class="tabs" [bulmaSize]="size">
            <ul>
                <li *ngFor="let tab of tabs">
                    <a>
                        <bulma-icon [name]="tab.icon" *ngIf="tab.icon"></bulma-icon>
                        <span>{{tab.header}}</span>
                    </a>
                </li>
            </ul>
        </div>
    `,
})
export class TabsComponent {
    @ContentChildren(TabDirective) tabs;
    @Input() size: string;
 }

