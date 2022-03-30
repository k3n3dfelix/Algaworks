import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('focus') onFocus(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', '#f2f2f2');
  }

  @HostListener('blur') outFocus(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
  }

}
