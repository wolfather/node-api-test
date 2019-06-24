import Env from './env';
import CorsConfig from './cors.config';

const config = () => {
    return {
        env: Env,
        cors: CorsConfig,
    }
};

export default config;