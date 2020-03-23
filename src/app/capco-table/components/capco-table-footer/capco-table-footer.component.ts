import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

class OnPageChangeEventRequest {
  offset = 0;
  limit = 10;
  page = 0;
}

@Component({
  selector: 'capco-table-footer',
  templateUrl: './capco-table-footer.component.html',
  styleUrls: ['./capco-table-footer.component.scss']
})

export class CapcoTableFooterComponent implements OnInit, OnChanges {
  @Input()
  totalCount: any;
  @Input()
  rowsPerPage: any;
  @Output() pagechange: EventEmitter<OnPageChangeEventRequest> = new EventEmitter<OnPageChangeEventRequest>();
  pageStartsAt = 0;
  currentIndex = 0;
  numberOfPages = 0;
  pages: number[] = [];
  @Input() currentPage = 1;
  numberOfSelectablePagesInPaginator = 5;
  onPageChangeEventRequest: OnPageChangeEventRequest = new OnPageChangeEventRequest();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.arrangeConfig();
  }

  arrangeConfig() {
    this.numberOfPages = Math.ceil(this.totalCount / this.rowsPerPage);
    this.pages = [];
    for (let j = 1; j <= this.numberOfPages; ++j) {
      this.pages.push(j);
    }
    setTimeout(() => {
      this.writeValue(this.currentPage);
    });
  }

  writeValue(value: number) {
    value = value || 0;
    value = isNaN(value) ? 0 : value;
    value = value >= this.pages.length ? 0 : value;
    if (value > 0 && value <= this.pages.length) {
      this.pageSelect(value, value - 1);
    } else {
      this.pageSelect(1, 0);
    }
    this.pageStartsAt = 0;
  }

  updateRowsPerPage() {
    this.onPageChangeEventRequest.limit = this.rowsPerPage;
    this.onPageChangeEventRequest.offset = this.currentIndex * this.rowsPerPage;
    this.pagechange.emit(this.onPageChangeEventRequest);
  }

  pageSelect(page: number, index: number, direct?: boolean) {
    this.currentPage = page;
    this.currentIndex = index;
    this.onPageChangeEventRequest.limit = this.rowsPerPage;
    this.onPageChangeEventRequest.offset = this.currentIndex * this.rowsPerPage;
    this.onPageChangeEventRequest.page = page - 1;
    this.pagechange.emit(this.onPageChangeEventRequest);
  }


  next(lastPage) {
    if (this.currentIndex < (this.pages.length - 1)) {
      if (!lastPage) {
        ++this.currentIndex;
        if (this.currentIndex > (this.pageStartsAt + this.numberOfSelectablePagesInPaginator - 1)) {
          this.pageStartsAt = this.currentIndex;
        }
      } else {
        this.currentIndex = this.pages.length - 1;
        this.pageStartsAt = this.currentIndex - this.numberOfSelectablePagesInPaginator + 1;
      }
      this.pageSelect(this.pages[this.currentIndex], this.currentIndex);
    }
  }

  previous(firstPage) {
    if (this.currentIndex > 0) {
      if (!firstPage) {
        --this.currentIndex;
        if (this.currentIndex < this.pageStartsAt) {
          this.pageStartsAt = this.pageStartsAt - this.numberOfSelectablePagesInPaginator;
        }
      } else {
        this.pageStartsAt = 0;
        this.currentIndex = 0;
      }
      this.pageSelect(this.pages[this.currentIndex], this.currentIndex);
    }
  }

  shiftRight() {
    const startIndex = Math.floor(this.currentIndex / this.numberOfSelectablePagesInPaginator) * this.numberOfSelectablePagesInPaginator;
    this.currentIndex = startIndex + this.numberOfSelectablePagesInPaginator;
    this.pageStartsAt = this.currentIndex;
    this.pageSelect(this.pages[this.currentIndex], this.currentIndex);
  }

  shiftLeft() {
    const startIndex = Math.floor(this.currentIndex / this.numberOfSelectablePagesInPaginator) * this.numberOfSelectablePagesInPaginator;
    this.currentIndex = startIndex - this.numberOfSelectablePagesInPaginator;
    this.pageStartsAt = this.currentIndex;
    this.pageSelect(this.pages[this.currentIndex], this.currentIndex);
  }
  hasRightShift() {
    return (this.pageStartsAt + this.numberOfSelectablePagesInPaginator) < (this.totalCount / this.rowsPerPage);
  }

  hasLeftShift() {
    return (this.pageStartsAt - this.numberOfSelectablePagesInPaginator) >= 0;
  }

  hideButton(i: number) {
    this.numberOfSelectablePagesInPaginator = this.numberOfSelectablePagesInPaginator || 5;
    return !(i >= this.pageStartsAt && i < (this.pageStartsAt + this.numberOfSelectablePagesInPaginator));
  }

}
