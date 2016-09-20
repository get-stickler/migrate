import {Table} from './Table';

export class Database {
    private name: string;
    private tables: Table[];

    constructor(name: string) {
        this.name = name;
    }

    public addTable(table: Table) {
        this.tables.push(table);
    }

    public getName() {
    	return this.name;
    }
}
