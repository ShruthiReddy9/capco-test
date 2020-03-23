import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rowData: any = [];
  columns: any[] = [
    {
      key: 'name',
      label: 'Full Name',
      width: 200
    },
    {
      key: 'email',
      label: 'Email Address',
    },
    {
      key: 'company',
      label: 'Company Name',
    },
    {
      key: 'phone',
      label: 'Phone Number',
    },
    {
      key: 'city',
      label: 'City Name',
    },
    {
      key: 'zip',
      label: 'Zip Number',
    },
    {
      key: 'fee',
      label: 'Fee Amount',
    },
    {
      key: 'url',
      label: 'Company Url',
    }
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
this.getData();
  }

  getData() {
    this.http.get('../assets/sample_data.json').subscribe((res: any) => {
      this.rowData = res;
    }, err => {
      this.rowData = [];
    });
  }
}
