import { test, expect } from "../../fixtures/searchEngine";
import { Severity } from "allure-js-commons";
import { searchEngineSteps } from "../../common/steps";
import { getStringArray } from "../../loaders/loaders";
import { configureAllureTest, setAttachment } from "../../common/allure";
import { allure } from "allure-playwright";

const correctPhrases = getStringArray('correct');
const incorrectPhrases = getStringArray('incorrect');

test.describe('Correct phrase',async () => {
    
    for(const phrase of correctPhrases) {

        test('Typing the "' + phrase + '" as the correct phrase',async ({searchEngine, searchResultsList}) => {

            await configureAllureTest('Typing the "' + phrase + '" link', Severity.CRITICAL);
            await allure.parameter('Phrase', phrase);
            await searchEngineSteps(searchEngine, phrase);
            await setAttachment('result', searchResultsList.getPage().locator(searchResultsList.getSiteContentSelector()));

            expect(await searchResultsList.isParentVisible()).toBeTruthy();
            expect(await searchResultsList.isMessageVisible()).toBeFalsy();
        })
    }
})

test.describe('Incorrect phrase',async () => {
    
    for(const phrase of incorrectPhrases) {

        test('Typing the "' + phrase + '" as the incorrect phrase',async ({searchEngine, searchResultsList}) => {

            await configureAllureTest('Typing the "' + phrase + '" link', Severity.NORMAL);
            await allure.parameter('Phrase', phrase);
            await searchEngineSteps(searchEngine, phrase);
            await setAttachment('result', searchResultsList.getPage().locator(searchResultsList.getSiteContentSelector()));

            expect(await searchResultsList.isParentVisible()).toBeFalsy();
            expect(await searchResultsList.isMessageVisible()).toBeTruthy();
        })
    }
})