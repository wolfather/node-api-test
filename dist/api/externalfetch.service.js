"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const env_1 = __importDefault(require("../config/env"));
const path_1 = __importDefault(require("path"));
/**
 * Método que faz a busca dos dados externos da API
 * @author Israel <so.israelweb@gmail.com>
 * @version 1.0.0
 */
class ExternalfetchService {
    constructor() { }
    /**
     * Método que busca os dados da API externa
     * em caso de sucesso, e em caso de falha retorna o mock
     * @returns <Promise<Array<Iperson>>>
     */
    fetcher() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield node_fetch_1.default(env_1.default.API_URL)
                .then(response => response.json(), failure => {
                console.log('ERROR: ', failure);
                return require(path_1.default.resolve('', './mock/people.mock.json'));
            });
        });
    }
}
exports.default = ExternalfetchService;
//# sourceMappingURL=externalfetch.service.js.map