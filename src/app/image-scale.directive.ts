import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageScale]'
})
export class ImageScaleDirective {

    constructor(private renderer:Renderer2){
    }

    @HostListener('load',['$event.target'])
    onLoad(el:ElementRef){
        console.log(el.offsetHeight, el.offsetWidth)
        let klass = el.offsetHeight > el.offsetWidth ? "tall" : "wide"
        this.renderer.addClass(el, klass)
    }

}
