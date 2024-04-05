import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { redirectionLinkAssertion } from "../../common/assertions";
import { test } from "../../fixtures/mainMenu";
import { getLinkTypes } from "../../loaders/loaders";
import { configureAllureTest, setAllureParameters, setAttachment } from "../../common/allure";

const links = getLinkTypes('mainMenu');

test.describe('Main menu links',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.name + '" link',async ({mainMenu}) => {
            
            await configureAllureTest('Clicking the "' + link.name + '" link', Severity.CRITICAL);
            await setAllureParameters(link);
            await setAttachment(link.name, mainMenu.getLinkLocator(link.name));

            await allure.step('Click the "' + link.name + '" link',async () => {
                
                await mainMenu.clickLink(link.name);
            })

            await redirectionLinkAssertion(mainMenu.getPage(), link.pageUrl, link.tabName);
        })
    }   
})