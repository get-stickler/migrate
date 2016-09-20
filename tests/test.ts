import {expect} from 'chai';
import * as mocha from 'mocha';

import * as test from '../src/index';

describe('Stickler Migrate', () => {
    it('should do stuff');

    it('should say hello', () => {
        expect(test.sayHello('friend')).to.equal('hello friend');
    });

    it('should not say goodbye', () => {
        expect(test.sayHello('friend')).to.not.equal('goodbye friend');
    });
});
