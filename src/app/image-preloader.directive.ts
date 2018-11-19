import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: 'img[preload]',
  host: {
      '[src]' : 'src',
  }
})


export class ImagePreloaderDirective {

    @Input() src: string;
    @Input() default: string;

    @HostListener('error', ['$event']) onerror(event:any){
        console.log(event)
        this.updateUrl();
    }

    updateUrl() {
        this.src = this.default;
    }

}
