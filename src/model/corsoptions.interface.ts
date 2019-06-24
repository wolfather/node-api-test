export default interface Icorsoptions {
    origin: Array<string> | string;
    methods: string;
    preflightContinue: boolean;
    optionsSuccessStatus: number;
}