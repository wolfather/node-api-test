import fetch from 'node-fetch';
import Iperson from '../model/person.interface';
import Env from '../config/env';
import path from 'path';

/**
 * Método que faz a busca dos dados externos da API
 * @author Israel <so.israelweb@gmail.com>
 * @version 1.0.0
 */
export default class ExternalfetchService {
    constructor() {}

    /**
     * Método que busca os dados da API externa
     * em caso de sucesso, e em caso de falha retorna o mock
     * @returns <Promise<Array<Iperson>>>
     */
    public async fetcher(): Promise<Array<Iperson>> {
        return await fetch(Env.API_URL)
            .then(
                response => response.json(),
                failure => {
                    console.log('ERROR: ', failure);
                    return require(path.resolve('', './mock/people.mock.json'));
                }
            );
    }
}