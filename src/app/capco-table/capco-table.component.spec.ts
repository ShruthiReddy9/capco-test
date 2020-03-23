import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapcoTableComponent } from './capco-table.component';
import { CapcoTableService } from './capco-table.service';

describe('CapcoTableComponent', () => {
  let component: CapcoTableComponent;
  let fixture: ComponentFixture<CapcoTableComponent>;
  const capcoTableServiceStub = {
    setColumns: () => [{ label: 'name', key: 'key' }]
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CapcoTableComponent],
      providers: [{ provide: CapcoTableService, useValue: capcoTableServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapcoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
