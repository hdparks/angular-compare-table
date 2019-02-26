import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { CellComponent } from './cell/cell.component';
import { ImageScaleDirective } from './image-scale.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DeviceListComponent,
    ViewListComponent,
    CellComponent,
    ImageScaleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
