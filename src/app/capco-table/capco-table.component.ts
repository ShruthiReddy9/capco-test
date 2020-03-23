import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentInit, ElementRef } from '@angular/core';
import { CapcoTableService } from './capco-table.service';

@Component({
  selector: 'capco-table',
  templateUrl: './capco-table.component.html',
  styleUrls: ['./capco-table.component.scss']
})
export class CapcoTableComponent implements OnInit, AfterContentInit {
  headerColumns: any = [];
  totalCount = 0;
  bodyHeight: number;
  footerHeight = 50;
  visiableRows = [];
  pageNo: number;
  parentHeight: number;
  private _columns: Array<any>;
  private _rows: Array<any>;
  tableWidth = 0;
  @Input('columns')
  public get columns(): Array<any> {
    return this._columns;
  }
  public set columns(value: Array<any>) {
    this._columns = value;
    this.headerColumns = value ? this.capcoTableService.setColumns(value) : [];
    this.calculatetableWidth();
  }
  @Input('rows')
  public get rows(): Array<any> {
    return this._rows;
  }
  public set rows(value: Array<any>) {
    this._rows = value;
    this.totalCount = value && value.length ? value.length : 0;
    this.visiableRows = value ? value.slice(0, this.rowsPerPage) : [];
  }
  @Input() showFooter: boolean;
  @Input() headerHeight = 50;
  @Input() rowsPerPage = 50;
  constructor(private el: ElementRef, private capcoTableService: CapcoTableService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.parentHeight = this.el.nativeElement.parentElement.clientHeight;
    this.bodyHeight = this.showFooter ? this.parentHeight - this.headerHeight - this.footerHeight : this.parentHeight - this.headerHeight;
  }

  onPageChange(event) {
      this.rowsPerPage = Number(event.limit);
      this.pageNo = Number(event.page);
      this.visiableRows = this.rows.slice(this.pageNo * this.rowsPerPage, (this.pageNo * this.rowsPerPage) + this.rowsPerPage);
  }
  calculatetableWidth() {
    this.tableWidth = 0;
    const tableWidth = this.headerColumns.reduce((a, b) => {
      return Number(a) + Number(b.width);
  }, 0);
  this.tableWidth = tableWidth + 25;
  }
}
