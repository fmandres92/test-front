import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective implements OnChanges  {
    // tslint:disable-next-line:no-input-rename
    @Input('index') index;

    @Input('appIcon') selectedRow: number;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges(change: SimpleChanges): void {
    if (this.selectedRow === this.index) {
            this.renderer.removeClass(this.elRef.nativeElement, 'd-none');
        } else {
            this.renderer.addClass(this.elRef.nativeElement, 'd-none');
        }
    }
}
