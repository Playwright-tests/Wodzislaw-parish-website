const fs = require('fs');

export class JSONReader {

    private static testdata: any;

    constructor() { }

    public static get() {

        this.testdata = JSON.parse(JSON.stringify(require('../testdata/testdata.json')));

        return this.testdata;
    }
}