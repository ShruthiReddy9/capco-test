import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapcoTableComponent } from './capco-table/capco-table.component';
import { CapcoTableService } from './capco-table/capco-table.service';
import { CapcoTableHeaderComponent } from './capco-table/components/capco-table-header/capco-table-header.component';
import { CapcoTableBodyComponent } from './capco-table/components/capco-table-body/capco-table-body.component';


@NgModule({
  declarations: [
    AppComponent,
    CapcoTableComponent,
    CapcoTableHeaderComponent,
    CapcoTableBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CapcoTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
