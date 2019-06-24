"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const index_1 = __importDefault(require("./core/index"));
const config_1 = __importDefault(require("./config"));
const application = new index_1.default();
class App {
    constructor() {
        this._config = config_1.default();
        http_1.default.createServer(application.app)
            .listen(this._config.env.PORT);
    }
    sayHi() {
        return 'Hi!';
    }
}
exports.default = App;
const app = new App();
console.log(app.sayHi());
//# sourceMappingURL=app.js.map