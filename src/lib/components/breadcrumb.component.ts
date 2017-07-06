import {
    Component, Input, HostBinding,
    Directive, ContentChildren, QueryList
} from '@angular/core';

@Directive({
    selector: 'bu-crumb'
})
export class CrumbDirective {
    @Input() text: string;
}

@Component({
    selector: 'bu-breadcrumb',
    template: `
        <ul>
            <li *ngFor="let crumb of crumbs">
                <a (click)="crumbClick()">
                    {{ crumb.text }}
                </a>
            </li>
        </ul>
    `,
})
export class BreadcrumbComponent {
    @HostBinding('class.breadcrumb') private isBreadcrumb = true;

    @ContentChildren(CrumbDirective) crumbs: QueryList<CrumbDirective>;

}
