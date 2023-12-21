import { getJSONArray } from "./JSONArray.spec"

export function getPhrases(node: string) {

    const JSONArray = getJSONArray('searchEngine');
    let phrases: string[] = [];

    for(const data of JSONArray[node]) {

        phrases.push(data);
    }

    return phrases;
}