import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapcoTableBodyComponent } from './capco-table-body.component';

describe('CapcoTableBodyComponent', () => {
  let component: CapcoTableBodyComponent;
  let fixture: ComponentFixture<CapcoTableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapcoTableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapcoTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
