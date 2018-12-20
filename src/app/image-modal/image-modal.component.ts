import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

    public imageSrc;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
      this.imageSrc = `assets/public${this.data.name}`.replace('_thumbnail.jpg','.jpg')
  }

}
