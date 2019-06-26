import * as cors from 'cors';
import bodyParser from 'body-parser';

import Core from './core';
import CorsConfig from '../config/cors.config';
import Route from './route';

/**
 * Classe core da aplicação
 * [[Icore]] interface for details `interface Icore {}`
 * @version 1.0.1
 * @author Israel <so.israelweb@gmail.com>
 */
export default class Coreapp extends Core {
    private route: Route;

    constructor() {
        super();

        this.route = new Route();
        this.config();
    }

    private config(): void {
        this.app
            .use(
                cors.default(CorsConfig.options),
                bodyParser.urlencoded({
                    extended: true
                }),
                bodyParser.json(),
            )    
            .use('/', this.route.route());
    }
}