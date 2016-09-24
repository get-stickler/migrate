import {Column} from './Column';

export class Table {
    private name: string;
    private columns: Column[];

    constructor(name: string) {
        this.name = name;
        this.columns = [];
    }

    public addColumn(column: Column) {
        this.columns.push(column);
    }

    public getName() {
    	return this.name;
    }

    public getLatestAddedColumn() {
    	return this.columns.pop();
    }
}
