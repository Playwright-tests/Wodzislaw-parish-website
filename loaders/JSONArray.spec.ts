import { JSONReader } from "../JSON-reader/JSONReader.spec";

export function getJSONArray(key: string) {

    let testdata = JSONReader.get();

    return testdata[key];
}