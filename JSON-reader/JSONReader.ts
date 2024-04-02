import fs from 'fs';

export class JSONReader {

    private static testdata: any;

    constructor() { }

    public static get(fileName: string) {

        this.testdata = JSON.parse(JSON.stringify(require('../testdata/' + fileName)));

        return this.testdata;
    }
}