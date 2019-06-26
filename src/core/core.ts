import express from 'express';
import Icore from '../model/core.interface';

export default class Core implements Icore {
    public app: express.Application

    constructor() {
        this.app = express();
    }
} 