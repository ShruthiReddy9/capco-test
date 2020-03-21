import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentInit, ElementRef } from '@angular/core';
import { CapcoTableService } from './capco-table.service';

@Component({
  selector: 'capco-table',
  templateUrl: './capco-table.component.html',
  styleUrls: ['./capco-table.component.scss']
})
export class CapcoTableComponent implements OnInit, AfterContentInit {

  private _columns: Array<any>;
  @Input('columns')
  public get columns(): Array<any> {
    return this._columns;
  }
  public set columns(value: Array<any>) {
    this._columns = value;
    if(value){
      this.headerColumns = this.capcoTableService.setColumns(value);
    }
  }
  @Input() rows: Array<any>;
  headerColumns: any = [];
  constructor(private el: ElementRef, private capcoTableService: CapcoTableService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {

  }
}
