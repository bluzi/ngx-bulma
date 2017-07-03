import { Directive, HostBinding, OnChanges, Input, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[bulmaSize]'
})
export class SizeDirective implements OnChanges {
    @Input() bulmaSize: string;
    
    @HostBinding('class.is-small') isSmall: boolean;
    @HostBinding('class.is-normal') isNormal: boolean;
    @HostBinding('class.is-medium') isMedium: boolean;
    @HostBinding('class.is-large') isLarge: boolean;

    ngOnChanges(changes: SimpleChanges): void {
        this.isSmall = this.bulmaSize === 'small';        
        this.isNormal = this.bulmaSize === 'normal';        
        this.isMedium = this.bulmaSize === 'medium';        
        this.isLarge = this.bulmaSize === 'large';        
    }    
}