import { Component, Input, HostBinding, Directive } from '@angular/core';

@Directive({
    selector: 'bu-button, [buButton]',
})
export class ButtonDirective {
    @HostBinding('class.button') isButton = true;

    @HostBinding('class.is-loading') isLoading: boolean;
    @HostBinding('class.is-outlined') isOutlined: boolean;
    @HostBinding('class.is-inverted') isInverted: boolean;
    @HostBinding('class.is-link') isLink: boolean;

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
