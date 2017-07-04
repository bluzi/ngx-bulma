import { Component, Input, ContentChildren, Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'bulma-tab',
})
export class TabDirective {
    @Input() header: string;
    @Input() icon: string;
}

 @Component({
    selector: 'bulma-tabs',
    template: `
       <div class="tabs" [bulmaSize]="size" [ngClass]="{ 'is-boxed': boxed !== undefined, 
                                                       'is-toggle': toggle !== undefined, 
                                                       'is-fullwidth': fullwidth !== undefined }">
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
    @Input() boxed: boolean;
    @Input() toggle: boolean;
    @Input() fullwidth: boolean;
 }

