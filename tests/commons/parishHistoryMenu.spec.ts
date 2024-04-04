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

        test('Clicking the "' + link.link + '" link',async ({menu}) => {
            
            await configureAllureTest('Clicking the "' + link.link + '" link', Severity.CRITICAL);
            await setAllureParameters(link);
            await setAttachment(link.link, menu.getLinkLocator(link.link));

            await allure.step('Click the "' + link.link + '" link',async () => {
                
                await menu.clickLink(link.link);
            })

            await redirectionLinkAssertion(menu.getPage(), link.pageUrl, link.tabName);
        })
    }
})