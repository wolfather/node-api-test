"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
const cors_config_1 = __importDefault(require("./cors.config"));
const config = () => {
    return {
        env: env_1.default,
        cors: cors_config_1.default,
    };
};
exports.default = config;
//# sourceMappingURL=index.js.map