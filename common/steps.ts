import { SearchEngine } from "../page-object/elements/searchEngine.";
import { allure } from "allure-playwright";
import { setAttachment } from "./allure";

export async function searchEngineSteps(searchEngine: SearchEngine, phrase: any) {
    
    await allure.parameter('phrase', phrase)

    await allure.step('Enter the "' + phrase +'"',async () => {
                
        await searchEngine.setPhrase(phrase);
    })

    await setAttachment(phrase, searchEngine.getPage().locator(searchEngine.getSelector()));

    await allure.step('Click the search button',async () => {
        
        await searchEngine.clickButton();
    })
}