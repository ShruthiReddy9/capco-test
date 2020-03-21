import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'capco-table-body',
  templateUrl: './capco-table-body.component.html',
  styleUrls: ['./capco-table-body.component.scss']
})
export class CapcoTableBodyComponent implements OnInit, OnChanges {
  @Input() rows: Array<any> = [];
  @Input() columns: any = [];
  visibleRows: any = []
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.visibleRows = this.rows ? this.rows.slice() : [];
  }

}
