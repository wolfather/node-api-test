import Iperson, { Ipersondatadetail } from "../model/person.interface";
/**
 * Realiza o tratamento dos dados
 * @param data <Array<Iperson>> dados retornados da promise
 * para o tratamento dos dados
 * @class [ParsepersondataService] classe que analisa os dados
 * vindos do fetch, usando o chain pattern para facilitar o uso
 * @method filter() filtra os dados atendendo os requisito de endereço
 * @method sort() ordena os dados por ordem alfabética por empresa
 * @method normalize() normaliza os dados expostos
 * @author Israel <so.israelwebATgmail.com>
 * @version 1.0.0
 */
export default class ParsepersondataService {
    personDetails: Array<Ipersondatadetail>;
    private readonly terms;
    private _data;
    private value;
    constructor(data: Array<Iperson>);
    /**
     * @returns <ParsepersondataService> filtrando a lista de pessoas
     * contendo apenas endereços que tenham o termo ```suite```
     */
    filter(): ParsepersondataService;
    /**
     * @returns <ParsepersondataService> ordenados os dados
     * apenas pelo nome da empresa
     */
    sort(): ParsepersondataService;
    /**
     * @returns <ParsepersondataService> com o nome,
     * website, email e companhia da pessoa
     */
    normalize(): ParsepersondataService;
}
//# sourceMappingURL=parsepersondata.service.d.ts.map