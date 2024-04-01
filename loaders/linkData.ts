import { JSONReader } from "../JSON-reader/JSONReader";
import { getJSONArray } from "./JSONArray";

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

export function getPhotoGalleryLinkData() {

    let linkData: { partOfLinkText: string, partOfExpectedUrl: string } = {

        partOfLinkText: 'Anno Domini ',
        partOfExpectedUrl: 'https://wnmp.pl/media/anno-domini-'
    }
    
    return linkData;
}