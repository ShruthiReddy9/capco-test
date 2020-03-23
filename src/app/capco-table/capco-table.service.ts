import { Injectable } from "@angular/core";

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
        return this.columns;
    }
}