import {expect} from 'chai';
import * as mocha from 'mocha';
import {Database} from '../src/Database';

describe('Stickler Migrate', () => {
    describe('Databases', () => {
        it('should have a name', () => {
        	let name = 'testDB';
        	let db = new Database(name);
        	expect(db.getName()).to.equal(name);
        });

        it('should be able to add tables');
    });

    describe('Tables', () => {
        it('should have a name');

        it('should be able to add columns');
    });

    describe('Columns', () => {
        it('should have a name');

        it('should allow boolean types');

        it('should allow string types');

        it('should allow integer types');
    });
});
