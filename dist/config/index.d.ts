import Env from './env';
import CorsConfig from './cors.config';
declare const config: () => {
    env: typeof Env;
    cors: typeof CorsConfig;
};
export default config;
//# sourceMappingURL=index.d.ts.map