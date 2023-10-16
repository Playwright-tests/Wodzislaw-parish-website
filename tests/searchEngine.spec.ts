import { correctPhrases, incorrectPhrases } from "../data/searchEngine.spec";
import { test, expect } from "../fixtures/searchEngine.spec";

test.describe('Search engine tests',async () => {
    
    for(let i = 0; i < correctPhrases.length; i++) {

        test('Typing the "' + correctPhrases[i] + '" as the correct phrase',async ({searchEngine, searchResultsList}) => {

            await test.step('Type "' + correctPhrases[i] +'" as the correct phrase',async () => {
                
                await searchEngine.setPhrase(correctPhrases[i]);
            })

            await test.step('Click the search button',async () => {
                
                await searchEngine.clickButton();
            })

            expect(await searchResultsList.isParentVisible()).toBeTruthy();
            expect(await searchResultsList.isMessageVisible()).toBeFalsy();
        })
    }

    for(let i = 0; i < incorrectPhrases.length; i++) {

        test('Type "' + incorrectPhrases[i] +'" as the correct phrase',async ({searchEngine, searchResultsList}) => {
            
            await test.step('Type "' + incorrectPhrases[i] +'" as the correct phrase',async () => {
                
                await searchEngine.setPhrase(incorrectPhrases[i]);
            })

            await test.step('Click the search button',async () => {
                
                await searchEngine.clickButton();
            })

            expect(await searchResultsList.isParentVisible()).toBeFalsy();
            expect(await searchResultsList.isMessageVisible()).toBeTruthy();
        })
    }
})