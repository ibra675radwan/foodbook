import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef) {

    eleRef.nativeElement.style.background = 'red';
    this.eleRef
   }
   @HostListener('mouseenter') onmousernter(){
this.eleRef.nativeElement.style.background ='none'
   }
@HostListener('mouseleave') onmouseLeave(){
this.eleRef.nativeElement.style.background= 'none'

setTimeout(() => {
  this.eleRef.nativeElement.style.background='none'
}, 5000);
}
}