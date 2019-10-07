import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appBgColor]'
})
export class BgColorDirective {

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2
    ) {}

    @HostListener('mouseover')
    onMouseOver() {
       this.renderer.addClass(this.elRef.nativeElement, 'focus');
    }
    @HostListener('mouseleave')
    onMouseLeave() {
       this.renderer.removeClass(this.elRef.nativeElement, 'focus');
    }
}
