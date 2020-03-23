import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CapcoTableComponent } from './capco-table/capco-table.component';
import { CapcoTableService } from './capco-table/capco-table.service';
import { CapcoTableBodyComponent } from './capco-table/components/capco-table-body/capco-table-body.component';
import { CapcoTableFooterComponent } from './capco-table/components/capco-table-footer/capco-table-footer.component';
import { CapcoTableHeaderComponent } from './capco-table/components/capco-table-header/capco-table-header.component';

describe('AppComponent', () => {
  const capcoTableServiceStub = {
    setColumns: () => [{ label: 'name', key: 'key' }]
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CapcoTableHeaderComponent,
        CapcoTableBodyComponent, CapcoTableFooterComponent, CapcoTableComponent
      ],
      providers: [{ provide: CapcoTableService, useValue: capcoTableServiceStub }],
      imports: [HttpClientTestingModule, FormsModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
