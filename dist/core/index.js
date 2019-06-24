"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = __importStar(require("cors"));
const bodyParser = require("body-parser");
const externalfetch_service_1 = __importDefault(require("../api/externalfetch.service"));
const cors_config_1 = __importDefault(require("../config/cors.config"));
const parsepersondata_service_1 = __importDefault(require("../service/parsepersondata.service"));
/**
 * Classe core da aplicação
 * [[Icore]] interface for details `interface Icore {}`
 * @version 1.0.0
 * @author Israel <so.israelweb@gmail.com>
 */
class Coreapp {
    constructor() {
        this.externalf = new externalfetch_service_1.default();
        this.app = express_1.default();
        this.config();
        this.route();
    }
    route() {
        const router = express_1.default.Router();
        return router
            .get('/api/people', cors.default(cors_config_1.default.options), (req, res, next) => {
            this.externalf
                .fetcher()
                .then((result) => {
                if (result.length) {
                    const people = new parsepersondata_service_1.default(result);
                    people
                        .filter()
                        .sort()
                        .normalize();
                    res.json(people.personDetails);
                }
                else {
                    res.json({ 'error': 'no data found' });
                }
            }).catch(rejected => {
                res.json({ 'error': rejected });
            });
        });
    }
    config() {
        this.app
            .use(bodyParser.urlencoded({
            extended: true
        }), bodyParser.json())
            .use('/', this.route());
    }
}
exports.default = Coreapp;
//# sourceMappingURL=index.js.map