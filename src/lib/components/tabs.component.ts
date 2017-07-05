import { Component, Input, ContentChildren, Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'bu-tab',
})
export class TabDirective {
    @Input() header: string;
    @Input() icon: string;
}

 @Component({
    selector: 'bu-tabs',
    template: `
       <div class="tabs" [ngClass]="{ 'is-boxed': boxed !== undefined, 
                                                       'is-toggle': toggle !== undefined, 
                                                       'is-fullwidth': fullwidth !== undefined }">
            <ul>
                <li *ngFor="let tab of tabs">
                    <a>
                        <bu-icon [name]="tab.icon" *ngIf="tab.icon"></bu-icon>
                        <span>{{tab.header}}</span>
                    </a>
                </li>
            </ul>
        </div>
    `,
})
export class TabsComponent {
    @ContentChildren(TabDirective) tabs;
    @Input() boxed: boolean;
    @Input() toggle: boolean;
    @Input() fullwidth: boolean;
 }

