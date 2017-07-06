import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'bu-subtitle, [buSubtitle]'
})
export class SubtitleDirective { 
    @HostBinding('class.subtitle') private isSubtitle = true;
    @HostBinding('style.display') private display = 'block';
}
