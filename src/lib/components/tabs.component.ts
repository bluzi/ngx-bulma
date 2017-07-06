import {
    Directive, Input, HostBinding,
    Component, ContentChildren, AfterViewInit,
    QueryList, EventEmitter, Output
} from '@angular/core';

@Directive({
    selector: 'bu-tab',
})
export class TabDirective {
    private static seed = 0;

    readonly id: number;

    @Input() header: string;
    @Input() icon: string;

    @HostBinding('hidden') isHidden: boolean;

    private isActive: boolean;
    @HostBinding('class.active') set active(value: boolean) {
        this.isActive = value;
        this.isHidden = !this.isActive;
    }

    get active(): boolean {
        return this.isActive;
    }

    constructor() {
        this.id = TabDirective.seed++;
        this.active = false;
    }
}

@Component({
    selector: 'bu-tabs',
    template: `
       <div class="tabs" [ngClass]="{ 'is-boxed': boxed !== undefined, 
                                                       'is-toggle': toggle !== undefined, 
                                                       'is-fullwidth': fullwidth !== undefined }">
            <ul>
                <li *ngFor="let tab of tabs" [class.is-active]="tab.active">
                    <a (click)="selectTab(tab)">
                        <bu-icon [name]="tab.icon" *ngIf="tab.icon"></bu-icon>
                        <span>{{tab.header}}</span>
                    </a>
                </li>
            </ul>
        </div>

        <ng-content></ng-content>
    `,
})
export class TabsComponent implements AfterViewInit {
    @ContentChildren(TabDirective) tabs: QueryList<TabDirective>;

    @Input() boxed: boolean;
    @Input() toggle: boolean;
    @Input() fullwidth: boolean;

    @Output() select = new EventEmitter<TabDirective>();

    private selectedTab: TabDirective;

    selectTab(tab: TabDirective) {
        this.tabs.forEach((t: TabDirective) => t.active = (t.id === tab.id));
        this.selectedTab = tab;
        this.select.emit(tab);
    }

    ngAfterViewInit(): void {
        if (this.tabs && this.tabs.length > 0) {
            this.tabs.first.active = true;
        }
    }
}

