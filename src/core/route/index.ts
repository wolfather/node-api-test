import { Ipersondatadetail } from './../../../dist/model/person.interface.d';
import express, { Router, Request, Response, NextFunction } from "express";
import ParsepersondataService from '../../service/parsepersondata.service';
import ExternalfetchService from '../../api/externalfetch.service';
import Iperson from '../../model/person.interface';

export default class Route {
    private externalf: ExternalfetchService;

    constructor() {
        this.externalf = new ExternalfetchService();
    }

    public route(): Router {
        return express.Router()
            .get('/api/people', 
                (req: Request, res: Response, next: NextFunction) => {
                this.externalf
                    .fetcher()
                    .then((result: Array<Iperson>) => {
                        if(result.length) {
                            res.json(this.getPersonDetails(result));
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

    private getPersonDetails(data: Array<Iperson>): Array<Ipersondatadetail> {
        const people = new ParsepersondataService(data);

        people
            .filter()
            .sort()
            .normalize();
        
        return people.personDetails;
    }
}