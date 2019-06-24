import Env from "./env";
import Icorsoptions from "src/model/corsoptions.interface";

export default class CorsConfig {
    public static readonly options: Icorsoptions = {
        origin: Env.ORIGINS_ALLOWED,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    };
}