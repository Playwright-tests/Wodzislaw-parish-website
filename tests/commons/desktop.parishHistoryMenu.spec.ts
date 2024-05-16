import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { redirectionLinkAssertion } from "../../common/assertions";
import { URLs } from "../../enums/URLs";
import { test } from "../../fixtures/subpageMenu";
import { getLinkTypes } from "../../loaders/loaders";
import { configureAllureTest, setAllureParameters, setAttachment } from "../../common/allure";

test.use({ url: URLs.PARISH_HISTORY });

const links = getLinkTypes('parishHistory');

test.describe('Parish history menu tests',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.name + '" link',async ({menu}) => {
            
            await allure.tag('Menu');
            await allure.tag('Links');
            await configureAllureTest('Clicking the "' + link.name + '" link', Severity.CRITICAL);
            await setAllureParameters(link);
            await setAttachment(link.name, menu.getLinkLocator(link.name));

            await allure.step('Click the "' + link.name + '" link',async () => {
                
                await menu.clickLink(link.name);
            })

            await redirectionLinkAssertion(menu.getPage(), link.pageUrl, link.tabName);
        })
    }
})