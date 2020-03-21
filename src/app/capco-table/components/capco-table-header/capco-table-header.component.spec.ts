import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapcoTableHeaderComponent } from './capco-table-header.component';

describe('CapcoTableHeaderComponent', () => {
  let component: CapcoTableHeaderComponent;
  let fixture: ComponentFixture<CapcoTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapcoTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapcoTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
