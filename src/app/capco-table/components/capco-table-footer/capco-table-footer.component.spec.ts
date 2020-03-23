import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapcoTableFooterComponent } from './capco-table-footer.component';

class OnPageChangeEventRequest {
  offset = 0;
  limit = 10;
}
describe('CapcoTableFooterComponent', () => {
  let component: CapcoTableFooterComponent;
  let fixture: ComponentFixture<CapcoTableFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapcoTableFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapcoTableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
