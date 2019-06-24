"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class ParsepersondataService {
    constructor(data) {
        this.personDetails = [];
        this.terms = (/suite/gi);
        this._data = [];
        this.value = [];
        this._data = data;
    }
    /**
     * @returns <ParsepersondataService> filtrando a lista de pessoas
     * contendo apenas endereços que tenham o termo ```suite```
     */
    filter() {
        this.value = this._data.filter((d) => (this.terms.test(d.address.street) ||
            this.terms.test(d.address.suite)));
        return this;
    }
    /**
     * @returns <ParsepersondataService> ordenados os dados
     * apenas pelo nome da empresa
     */
    sort() {
        this.value
            /*.sort((a, b) => {
                return (a.name > b.name) ? 1 : 0;
            })*/
            .sort((a, b) => {
            return (a.company.name > b.company.name) ? 1 : 0;
        });
        return this;
    }
    /**
     * @returns <ParsepersondataService> com o nome,
     * website, email e companhia da pessoa
     */
    normalize() {
        this.value.map((v) => {
            const { name, website, email, company } = v;
            this.personDetails.push({
                name,
                website,
                email,
                company
            });
        });
        return this;
    }
}
exports.default = ParsepersondataService;
//# sourceMappingURL=parsepersondata.service.js.map