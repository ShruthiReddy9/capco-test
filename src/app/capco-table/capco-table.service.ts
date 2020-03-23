import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CapcoTableService {
    columns: any = [];
    public setColumns(columns: Array<any>) {
        this.columns = columns.map(c => {
            return {
                key: c.key,
                label: c.label,
                width: c.width || 150,
            };
        });
        this.columns.push({ key: 'button', name: 'Action', width: 150 });
        return this.columns;
    }
}
