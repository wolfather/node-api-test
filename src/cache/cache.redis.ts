import { RedisClient } from 'redis';
import redisConfig from './cache.config';
import Env from '../config/env';

export default class Cache {
    public cache = new RedisClient({
        host: Env.REDIS_CONFIG_HOST,
        detect_buffers: true
    });

    private readonly cacheKey = 'log';

    constructor() {}

    public getCache(): any {
        this.cache.get(this.cacheKey, (err, result) => {
            if(err) {
                throw new Error;
            }
            return result;
        });
    }

    public setCache(value: string): void {
        this.cache.set(this.cacheKey, value, 
            redisConfig.setMode, 
            redisConfig.timeout, 
            (err, result) => {
                console.log(result);
            }
        );
    }

    public quit(): void {
        this.cache.quit(() => {
            this.cache.end(true);
        });
    }
}