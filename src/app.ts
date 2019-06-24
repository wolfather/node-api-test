import http from 'http';
import Coreapp from './core/index';
import config from './config';

const application = new Coreapp();

export default class App {
    private _config = config();

    constructor() {
        http.createServer(application.app)
            .listen(this._config.env.PORT);
    }

    public sayHi(): string {
        return 'Hi!';
    }
}

const app = new App();

console.log(app.sayHi());