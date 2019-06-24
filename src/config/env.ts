/**
 * Variáveis de ambiente
 * @author Israel <so.israelweb@gmail.com>
 * @version 1.0.0
 */
export default class Env {
    public static readonly PORT = (process.env.PORT || '8080');
    public static readonly HOST = (process.env.HOST || '0.0.0.0');
    public static readonly ORIGINS_ALLOWED = (
        process.env.ORIGINS_ALLOWED || [
        'http://localhost:8080',
        'http://localhost:3000',
    ]);

    public static readonly API_URL = (
        process.env.API_URL || 
        'https://jsonplaceholder.typicode.com/users'
    );

    public static readonly REDIS_CONFIG_PORT = (
        process.env.REDIS_CONNECT_CONFIG || 6379
    );

    public static readonly REDIS_CONFIG_HOST = (
        process.env.REDIS_CONNECT_HOST || '0.0.0.0'
    );
}