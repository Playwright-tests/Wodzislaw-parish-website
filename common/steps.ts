import { test } from "@playwright/test";
import { SearchEngine } from "../page-object/elements/searchEngine.";
import { allure } from "allure-playwright";

export async function searchEngineSteps(searchEngine: SearchEngine, phrase: any) {
    
    await allure.parameter('phrase', phrase)

    await allure.step('Enter the "' + phrase +'"',async () => {
                
        await searchEngine.setPhrase(phrase);
    })

    await allure.step('Click the search button',async () => {
        
        await searchEngine.clickButton();
    })
}