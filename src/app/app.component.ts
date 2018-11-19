import { Component } from '@angular/core';
import { CompareTableCellComponent } from './compare-table-cell/compare-table-cell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

  // columns is a list of strings, the names of the different BYUtv devices
  columns = ['Roku','AppleTV','FireTV','Web','Mobile web','iOS','Android'];

  // rows is a list of the features being compared/contrasted
  rows = ['homepage','menu'];
}
