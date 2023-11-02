import { JSONReader } from "../JSON-reader/JSONReader.spec";
import { test, expect } from "../fixtures/searchEngine.spec";

const testdata = JSONReader.get();

test.describe('Search engine tests',async () => {
    
    for(let i = 0; i < testdata.correctPhrases.length; i++) {

        test('Typing the "' + testdata.correctPhrases[i] + '" as the correct phrase',async ({searchEngine, searchResultsList}) => {

            await test.step('Type "' + testdata.correctPhrases[i] +'" as the correct phrase',async () => {
                
                await searchEngine.setPhrase(testdata.correctPhrases[i]);
            })

            await test.step('Click the search button',async () => {
                
                await searchEngine.clickButton();
            })

            expect(await searchResultsList.isParentVisible()).toBeTruthy();
            expect(await searchResultsList.isMessageVisible()).toBeFalsy();
        })
    }

    for(let i = 0; i < testdata.incorrectPhrases.length; i++) {

        test('Type "' + testdata.incorrectPhrases[i] +'" as the correct phrase',async ({searchEngine, searchResultsList}) => {
            
            await test.step('Type "' + testdata.incorrectPhrases[i] +'" as the correct phrase',async () => {
                
                await searchEngine.setPhrase(testdata.incorrectPhrases[i]);
            })

            await test.step('Click the search button',async () => {
                
                await searchEngine.clickButton();
            })

            expect(await searchResultsList.isParentVisible()).toBeFalsy();
            expect(await searchResultsList.isMessageVisible()).toBeTruthy();
        })
    }
})