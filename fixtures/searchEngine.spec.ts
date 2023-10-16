import { test as base } from "./subpageMenu_2.spec";
import { SearchEngine } from "../page-object/elements/searchEngine.spec";
import { SearchResultsList } from "../page-object/elements/searchResultsList.spec";

type SearchEngineFixture = {

    searchEngine: SearchEngine,
    searchResultsList: SearchResultsList
};

export const test = base.extend<SearchEngineFixture>({

    searchEngine:async ({page}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const searchEngine = new SearchEngine(page);

        await use(searchEngine);
    },

    searchResultsList:async ({page}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const searchResultsList = new SearchResultsList(page);

        await use(searchResultsList);
    }
})

export { expect } from "@playwright/test";