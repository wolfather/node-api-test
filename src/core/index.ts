import express, 
    {
        Request, 
        Response, 
        NextFunction, 
        Router 
} from 'express';
import * as cors from 'cors';
import bodyParser = require('body-parser');

import Icore from '../model/core.interface';
import Iperson from '../model/person.interface';

import ExternalfetchService from '../api/externalfetch.service';
import CorsConfig from '../config/cors.config';
import ParsepersondataService from '../service/parsepersondata.service';

/**
 * Classe core da aplicação
 * [[Icore]] interface for details `interface Icore {}`
 * @version 1.0.0
 * @author Israel <so.israelweb@gmail.com>
 */
export default class Coreapp implements Icore {
    public app: express.Application;
    private externalf = new ExternalfetchService();

    constructor() {
        this.app = express();
        this.config();
        this.route();
    }

    private route(): Router {
        const router = express.Router();
       
        return router
            .get('/api/people', 
                cors.default(CorsConfig.options), 
                (req: Request, res: Response, next: NextFunction) => {
                this.externalf
                    .fetcher()
                    .then((result: Array<Iperson>) => {
                        if(result.length) {
                            const people = new ParsepersondataService(result);

                            people
                                .filter()
                                .sort()
                                .normalize();
    
                            res.json(people.personDetails);
                        } else {
                            res.json({'error': 'no data found'});
                        }
                    }).catch(rejected => {
                        res.json({'error': rejected});
                    });
            })
            .get('log/', (req: Request, res: Response, next: NextFunction) => {
                // TODO
                res.status(200)
                    .json({'log': 'logStatus'});
            });
    }

    private config(): void {
        this.app
            .use(
                bodyParser.urlencoded({
                    extended: true
                }),
                bodyParser.json(),
            )    
            .use('/', this.route());
    }
}