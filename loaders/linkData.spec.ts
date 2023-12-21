import { JSONReader } from "../JSON-reader/JSONReader.spec";
import { getJSONArray } from "./JSONArray.spec";

export function getLinkData(node: string) {

    const JSONArray = getJSONArray('URLs');
    let linkData: { link: string, pageUrl: string, tabName: string }[] = [];

    for(const data of JSONArray[node]) {

        let temp = {

            link: data.link,
            pageUrl: data.pageUrl,
            tabName: data.tabName
        }

        linkData.push(temp);
    }

    return linkData;
}