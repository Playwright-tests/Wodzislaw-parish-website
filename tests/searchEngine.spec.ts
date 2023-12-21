import { searchEngineSteps } from "../common/steps.spec";
import { test, expect } from "../fixtures/searchEngine.spec";
import { getPhrases } from "../loaders/phrases.spec";

const correctPhrases = getPhrases('correct');
const incorrectPhrases = getPhrases('incorrect');

test.describe('Correct phrase',async () => {
    
    for(const data of correctPhrases) {

        test('Typing the "' + data + '" as the correct phrase',async ({searchEngine, searchResultsList}) => {

            await searchEngineSteps(searchEngine, data);

            expect(await searchResultsList.isParentVisible()).toBeTruthy();
            expect(await searchResultsList.isMessageVisible()).toBeFalsy();
        })
    }
})

test.describe('Incorrect phrase',async () => {
    
    for(const data of incorrectPhrases) {

        test('Typing the "' + data + '" as the incorrect phrase',async ({searchEngine, searchResultsList}) => {

            await searchEngineSteps(searchEngine, data);

            expect(await searchResultsList.isParentVisible()).toBeFalsy();
            expect(await searchResultsList.isMessageVisible()).toBeTruthy();
        })
    }
})