import ParsepersondataService from './parsepersondata.service';

import { it, describe, beforeEach } from "mocha";
import { assert } from 'chai';
import Iperson from 'src/model/person.interface';

describe('Parsepersondata' , () => {
    const p = new ParsepersondataService(require('../../mock/people.mock.json'));

    beforeEach(async() => {});
    
    it('Should test the instance of ParsepersondataService', () => {
        assert.instanceOf(p, ParsepersondataService);
    })

    it('should exist methods', () => {
        assert.exists(p.filter);
        assert.exists(p.sort);
        assert.exists(p.normalize);
    })

    it('should have the term ```suite``` on the address after filter()', () => {
        p.filter()

        p['value'].map((v: Iperson) => {
            const address = ((`${v.address.street} - ${v.address.suite}`)).indexOf('Suite') !== -1;
            assert.isTrue(address, `${v.address.street} - ${v.address.suite}`);
        });
    })

    it('should fill the `personDetails` with data after normalize()', () => {
        p.normalize()

        assert.isNotEmpty(p.personDetails)
    })
})