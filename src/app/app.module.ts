import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareTableComponent } from './compare-table/compare-table.component';
import { CompareTableCellComponent } from './compare-table-cell/compare-table-cell.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ColCheckboxesComponent } from './col-checkboxes/col-checkboxes.component';
import { RowCheckboxesComponent } from './row-checkboxes/row-checkboxes.component';
import { ImagePreloaderDirective } from './image-preloader.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { TableModalComponent } from './table-modal/table-modal.component';
import { TableModalButtonComponent } from './table-modal-button/table-modal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareTableComponent,
    CompareTableCellComponent,
    CheckboxComponent,
    ColCheckboxesComponent,
    RowCheckboxesComponent,
    ImagePreloaderDirective,
    ImageModalComponent,
    TableModalComponent,
    TableModalButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents:[ImageModalComponent, TableModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
