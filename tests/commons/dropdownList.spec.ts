import { redirectionLinkAssertion } from "../../common/assertions";
import { test } from "../../fixtures/mainMenu";
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { getLinkTypes } from "../../loaders/loaders";
import { configureAllureTest, setAllureParameters } from "../../common/allure";

const links = getLinkTypes('dropdownList');

test.describe('Main menu dropdown list',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.link + '" link of the drop-down list',async ({mainMenu, page}) => {
            
            await configureAllureTest('Clicking the "' + link.link + '" link', Severity.CRITICAL);
            await setAllureParameters(link);

            await allure.step('Hover over the "Informacje stałe"',async () => {
                
                await (await mainMenu.getDropdownList()).hoverParent();
            })

            await allure.step('Click the "' + link.link + '" link',async () => {
                
                await (await mainMenu.getDropdownList()).clickLink(link.link);
            })

            await redirectionLinkAssertion(page, link.pageUrl, link.tabName);
        })
    }
})