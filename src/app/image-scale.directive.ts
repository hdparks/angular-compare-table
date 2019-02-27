import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageScale]'
})
export class ImageScaleDirective {

    constructor(private renderer:Renderer2){
    }

    // Listen for the image to be loaded in
    @HostListener('load',['$event.target'])
    onLoad(el:any){
        //  Call it "tall" or "wide"
        let klass = el.offsetHeight > el.offsetWidth ? "tall" : "wide"
        this.renderer.addClass(el, klass)
    }

}
