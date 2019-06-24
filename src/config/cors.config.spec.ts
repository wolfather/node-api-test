import { describe, it } from 'mocha';
import { assert } from 'chai';

import CorsConfig from './cors.config';
import Env from '../config/env';

describe('CorsConfig', () => {
    it('should have options', () => {
        assert.equal(CorsConfig.options.origin, Env.ORIGINS_ALLOWED);
        assert.equal(CorsConfig.options.methods, "GET,HEAD,PUT,PATCH,POST,DELETE");
        assert.equal(CorsConfig.options.preflightContinue, false);
        assert.equal(CorsConfig.options.optionsSuccessStatus, 204);
    });
})