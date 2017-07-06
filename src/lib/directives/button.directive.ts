import { Component, Input, HostBinding, Directive } from '@angular/core';

@Directive({
    selector: 'bu-button, [buButton]',
})
export class ButtonDirective {
    @HostBinding('class.button') private isButton = true;

    @HostBinding('class.is-loading') private isLoading: boolean;
    @HostBinding('class.is-outlined') private isOutlined: boolean;
    @HostBinding('class.is-inverted') private isInverted: boolean;
    @HostBinding('class.is-link') private isLink: boolean;

    @Input() set loading(value: boolean) {
        this.isLoading = (value !== undefined && value !== false);
    }

    @Input() set inverted(value: boolean) {
        this.isInverted = (value !== undefined && value !== false);
    }

    @Input() set outlined(value: boolean) {
        this.isOutlined = (value !== undefined && value !== false);
    }

    @Input() set link(value: boolean) {
        this.isLink = (value !== undefined && value !== false);
    }
}
