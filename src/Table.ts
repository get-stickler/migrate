import {Column} from './Column';

export class Table {
    private name: string;
    private columns: Column[];

    constructor(name: string) {
        this.name = name;
    }

    public addColumn(column: Column) {
        this.columns.push(column);
    }
}
