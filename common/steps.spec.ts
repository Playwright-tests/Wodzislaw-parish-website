import { test } from "@playwright/test";
import { SearchEngine } from "../page-object/elements/searchEngine.spec";

export async function searchEngineSteps(searchEngine: SearchEngine, data: any) {
    
    await test.step('Type "' + data +'" as the correct phrase',async () => {
                
        await searchEngine.setPhrase(data);
    })

    await test.step('Click the search button',async () => {
        
        await searchEngine.clickButton();
    })
}