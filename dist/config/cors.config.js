"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
class CorsConfig {
}
CorsConfig.options = {
    origin: env_1.default.ORIGINS_ALLOWED,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};
exports.default = CorsConfig;
//# sourceMappingURL=cors.config.js.map