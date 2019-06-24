import Iperson from '../model/person.interface';
/**
 * Método que faz a busca dos dados externos da API
 * @author Israel <so.israelweb@gmail.com>
 * @version 1.0.0
 */
export default class ExternalfetchService {
    constructor();
    /**
     * Método que busca os dados da API externa
     * em caso de sucesso, e em caso de falha retorna o mock
     * @returns <Promise<Array<Iperson>>>
     */
    fetcher(): Promise<Array<Iperson>>;
}
//# sourceMappingURL=externalfetch.service.d.ts.map