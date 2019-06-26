import { assert } from 'chai';
import { describe, it } from "mocha";

import Coreapp from ".";


describe('Coreapp', (async() => {
    const app = new Coreapp();
    
    it('should assert Coreapp instanceof', (async() => {
        await assert.instanceOf(app, Coreapp);
    }));
    
    it('should have config method', (async() => {
        await assert.isFunction(app['config']);
    }));
}));