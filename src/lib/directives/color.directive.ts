import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[bulmaColor]'
})
export class ColorDirective implements OnChanges {
    @Input() bulmaColor: string;
    
    @HostBinding('class.is-white') isWhite: boolean;
    @HostBinding('class.is-dark') isDark: boolean;
    @HostBinding('class.is-black') isBlack: boolean;
    @HostBinding('class.is-primary') isPrimary: boolean;
    @HostBinding('class.is-info') isInfo: boolean;
    @HostBinding('class.is-success') isSuccess: boolean;
    @HostBinding('class.is-warning') isWarning: boolean;
    @HostBinding('class.is-danger') isDanger: boolean;

    ngOnChanges(changes: SimpleChanges): void {
        this.isWhite = this.bulmaColor === 'white';        
        this.isDark = this.bulmaColor === 'dark';        
        this.isBlack = this.bulmaColor === 'black';        
        this.isPrimary = this.bulmaColor === 'primary';        
        this.isInfo = this.bulmaColor === 'info';        
        this.isSuccess = this.bulmaColor === 'success';        
        this.isWarning = this.bulmaColor === 'warning';        
        this.isDanger = this.bulmaColor === 'danger';        
    }    
}
