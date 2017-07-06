import { Component, Input, HostBinding, Directive } from '@angular/core';

@Directive({
    selector: 'bu-tile, [buTile]',
})
export class TileDirective {
    @HostBinding('class.tile') isTile = true;    

    @HostBinding('class.is-ancestor') private isAncestor: boolean;
    @HostBinding('class.is-parent') private isParent: boolean;
    @HostBinding('class.is-child') private isChild: boolean;
    @HostBinding('class.is-vertical') private isVertical: boolean;

    @Input() set ancestor(value: boolean) {
        this.isAncestor = (value !== undefined && value !== false);
    }

    @Input() set parent(value: boolean) {
        this.isParent = (value !== undefined && value !== false);        
    }

    @Input() set child(value: boolean) {
        this.isChild = (value !== undefined && value !== false);        
    }

    @Input() set vertical(value: boolean) {
        this.isVertical = (value !== undefined && value !== false);        
    }
}
