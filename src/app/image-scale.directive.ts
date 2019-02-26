import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageScale]'
})
export class ImageScaleDirective {

    e:ElementRef;
    @HostBinding('style.width') width:string;
    @HostBinding('style.height') height:string;

    constructor(e:ElementRef, ){
        this.e = e;
    }

    @HostListener('load',['$event'])
    onLoad(event:Event){
        console.log(event)
        if(this.width < this.height){
            this.e.nativeElement.classList.add("tall");
        } else {
            this.e.nativeElement.classList.add("wide");
        }

    }

}
