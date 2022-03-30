import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input()cor = '#f2f2f2';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('focus') onFocus(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', this.cor);
  }

  @HostListener('blur') outFocus(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
  }

}
