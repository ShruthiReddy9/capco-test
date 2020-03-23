import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapcoTableComponent } from './capco-table/capco-table.component';
import { CapcoTableService } from './capco-table/capco-table.service';
import { CapcoTableBodyComponent } from './capco-table/components/capco-table-body/capco-table-body.component';
import { CapcoTableFooterComponent } from './capco-table/components/capco-table-footer/capco-table-footer.component';
import { CapcoTableHeaderComponent } from './capco-table/components/capco-table-header/capco-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CapcoTableComponent,
    CapcoTableHeaderComponent,
    CapcoTableBodyComponent,
    CapcoTableFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CapcoTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
