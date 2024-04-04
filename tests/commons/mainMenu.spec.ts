import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { redirectionLinkAssertion } from "../../common/assertions";
import { test } from "../../fixtures/mainMenu";
import { getLinkTypes } from "../../loaders/loaders";
import { configureAllureTest, setAllureParameters } from "../../common/allure";

const links = getLinkTypes('mainMenu');

test.describe('Main menu links',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.link + '" link',async ({mainMenu}) => {
            
            await configureAllureTest('Clicking the "' + link.link + '" link', Severity.CRITICAL);
            await setAllureParameters(link);

            await allure.step('Click the "' + link.link + '" link',async () => {
                
                await mainMenu.clickLink(link.link);
            })

            await redirectionLinkAssertion(mainMenu.getPage(), link.pageUrl, link.tabName);
        })
    }   
})