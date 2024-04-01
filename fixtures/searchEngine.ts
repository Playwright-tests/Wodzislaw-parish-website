import { test as base } from "@playwright/test";
import { SearchEngine } from "../page-object/elements/searchEngine.";
import { SearchResultsList } from "../page-object/elements/searchResultsList";
import { URLs } from "../enums/URLs";

type SearchEngineFixture = {

    searchEngine: SearchEngine,
    searchResultsList: SearchResultsList
};

export const test = base.extend<SearchEngineFixture>({

    searchEngine:async ({page}, use) => {
        
        const searchEngine = new SearchEngine(page);

        await searchEngine.goto(URLs.HOME_PAGE);
        await use(searchEngine);
    },

    searchResultsList:async ({page}, use) => {
        
        const searchResultsList = new SearchResultsList(page);

        await searchResultsList.goto(URLs.HOME_PAGE)
        await use(searchResultsList);
    }
})

export { expect } from "@playwright/test";