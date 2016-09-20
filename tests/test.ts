import {expect} from 'chai';
import * as mocha from 'mocha';
import {Database} from '../src/Database';
import {Table} from '../src/Table';
import {Column} from '../src/Column';

describe('Stickler Migrate', () => {
    describe('Databases', () => {
    	// Create db
    	let name = 'testDB';
        let db1 = new Database(name);

        it('should have a name', () => {
        	expect(db1.getName()).to.equal(name);
        });

        it('should be able to add tables', () => {
        	let tb1 = new Table('testTable');
        	db1.addTable(tb1);
        	let tbcpy =  db1.getLatestAddedColumn();
        	expect(tb1).is.equals(tbcpy);
        });
    });

    describe('Tables', () => {
    	// Create table
    	let tbName = 'testTable';
        let tb1 = new Table(tbName);

        it('should have a name', () => {
        	expect(tb1.getName()).to.equal(tbName);
        });

        it('should be able to add columns', () => {
        	let col1 = new Column('testColumn');
        	tb1.addColumn(col1);
        	let colcpy = tb1.getLatestAddedColumn();
        	expect(col1).is.equals(colcpy);
        });
    });

    describe('Columns', () => {
        it('should have a name');

        it('should allow boolean types');

        it('should allow string types');

        it('should allow integer types');
    });
});
