import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { CellComponent } from './cell/cell.component';
import { ImageScaleDirective } from './image-scale.directive';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { ViewDataButtonComponent } from './view-data-button/view-data-button.component';
import { ViewDataModalComponent } from './view-data-modal/view-data-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DeviceListComponent,
    ViewListComponent,
    CellComponent,
    ImageScaleDirective,
    ImageDialogComponent,
    ViewDataButtonComponent,
    ViewDataModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
  ],
  entryComponents: [
     ImageDialogComponent,
     ViewDataModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
