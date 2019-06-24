"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Variáveis de ambiente
 * @author Israel <so.israelweb@gmail.com>
 * @version 1.0.0
 */
class Env {
}
Env.PORT = (process.env.PORT || '8080');
Env.HOST = (process.env.HOST || '0.0.0.0');
Env.ORIGINS_ALLOWED = (process.env.ORIGINS_ALLOWED || [
    'http://localhost:8080',
    'http://localhost:3000',
]);
Env.API_URL = (process.env.API_URL ||
    'https://jsonplaceholder.typicode.com/users');
exports.default = Env;
//# sourceMappingURL=env.js.map