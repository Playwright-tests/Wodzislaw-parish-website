import { test as base } from "./subpageMenu_2.spec";
import { SearchEngine } from "../page-object/elements/searchEngine.spec";

type SearchEngineFixture = {

    searchEngine: SearchEngine
};

export const test = base.extend<SearchEngineFixture>({

    searchEngine:async ({page}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const searchEngine = new SearchEngine(page);

        await use(searchEngine);
    }
})

export { expect } from "@playwright/test";