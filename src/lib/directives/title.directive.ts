import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'bu-title, [buTitle]'
})
export class TitleDirective { 
    @HostBinding('class.title') private isTitle = true;
    @HostBinding('style.display') private display = 'block';
}
