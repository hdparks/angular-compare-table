import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ImageModalService } from '../image-modal.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

    public imageSrc;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public imageModalService: ImageModalService) { }

  ngOnInit() {
      this.getImage(this.data.name)
  }

  extractImgSrc(b:Blob){
      let reader = new FileReader();
      reader.addEventListener('load', ()=>{
          this.imageSrc = reader.result;
      });
      reader.readAsDataURL(b);
  }

  getImage(f){
      this.imageModalService.getImage(f).subscribe(blob => {
          this.extractImgSrc(blob)
      });
  }

}
