import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[buDanger]'
})
export class DangerDirective {
    @HostBinding('class.is-danger') isDanger: boolean;
    
    @Input() set buDanger(value: boolean) {
        this.isDanger = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buWarning]'
})
export class WarningDirective {
    @HostBinding('class.is-warning') isWarning: boolean;
    
    @Input() set buWarning(value: boolean) {
        this.isWarning = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buSuccess]'
})
export class SuccessDirective {
    @HostBinding('class.is-success') isSuccess: boolean;
    
    @Input() set buSuccess(value: boolean) {
        this.isSuccess = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buInfo]'
})
export class InfoDirective {
    @HostBinding('class.is-info') isInfo: boolean;
    
    @Input() set buInfo(value: boolean) {
        this.isInfo = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buPrimary]'
})
export class PrimaryDirective {
    @HostBinding('class.is-primary') isPrimary: boolean;
    
    @Input() set buPrimary(value: boolean) {
        this.isPrimary = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buBlack]'
})
export class BlackDirective {
    @HostBinding('class.is-black') isBlack: boolean;
    
    @Input() set buBlack(value: boolean) {
        this.isBlack = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buDark]'
})
export class DarkDirective {
    @HostBinding('class.is-dark') isDark: boolean;
    
    @Input() set buDark(value: boolean) {
        this.isDark = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buWhite]'
})
export class WhiteDirective {
    @HostBinding('class.is-white') isWhite: boolean;
    
    @Input() set buWhite(value: boolean) {
        this.isWhite = (value !== undefined && value !== false);
    }
}
