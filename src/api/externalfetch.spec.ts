import { assert } from 'chai';
import { describe, it } from "mocha";
import ExternalfetchService from "./externalfetch.service";

describe('ExternalfetchService', (async() => {
    const instance = new ExternalfetchService();
    
    it('const instance should be an instance of ExternalfetchService', () => {
        assert.instanceOf(instance, ExternalfetchService);
    });

    it('should perform a fetch', (async() => {
        assert.exists(instance.fetcher)

        instance.fetcher()
            .then(success => {
                assert.isNotNull(success, success.toString())
            })
    }));
    
}))