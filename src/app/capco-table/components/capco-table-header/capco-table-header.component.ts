import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'capco-table-header',
  templateUrl: './capco-table-header.component.html',
  styleUrls: ['./capco-table-header.component.scss']
})
export class CapcoTableHeaderComponent implements OnInit, OnChanges {
  @Input() columns: any = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }

}
