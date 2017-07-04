import { Component, Input, ContentChildren, Directive, HostBinding, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'bulma-column',
    template: `<ng-content></ng-content>`
})
export class ColumnComponent {
    @HostBinding('class') class: string;

    @Input() set width(value: string) {
        if (!value) {
            this.class = 'column';
            return;
        }

        if (['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', 
             'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter'].includes(value) == false) {
            throw new Error(`Unknown column width "${value}"`);
        }

        this.class = 'column is-' + value;
    }

    constructor() {
        this.class = 'column';
    }
}

 @Component({
    selector: 'bulma-columns',
    template: `<ng-content></ng-content>`
})
export class ColumnsComponent {
      @HostBinding('class.columns') isCoulmns = true;
 }
