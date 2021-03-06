import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CapcoTableService } from '../../capco-table.service';

@Component({
  selector: 'capco-table-body',
  templateUrl: './capco-table-body.component.html',
  styleUrls: ['./capco-table-body.component.scss']
})
export class CapcoTableBodyComponent implements OnInit, OnChanges {
  @Input() rows: Array<any> = [];
  @Input() columns: any = [];
  visibleRows: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.visibleRows = this.rows ? this.rows.slice() : [];
  }

  submit(row, column) {
    this.http.post(`/api/submit/${row.id}`, {Id: row.id, status: row.status }).subscribe((res: any) => {
    }, err => {
      alert(`${row.id} submitted`);
    });
  }

}
