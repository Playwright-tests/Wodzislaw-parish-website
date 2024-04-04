import { allure } from "allure-playwright";
import { redirectionLinkAssertion } from "../../common/assertions";
import { URLs } from "../../enums/URLs";
import { test } from "../../fixtures/subpageMenu";
import { getLinkTypes } from "../../loaders/loaders";

test.use({ url: URLs.PARISH_GROUPS });

const links = getLinkTypes('parishGroups');

test.describe('Parish groups menu tests',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.link + '" link',async ({menu}) => {

            await allure.parameter('link', link.link);
            await allure.parameter('expected page URL', link.pageUrl);
            await allure.parameter('expected tab name', link.tabName);

            await allure.step('Click the "' + link.link + '" link',async () => {
                
                await menu.clickLink(link.link);
            })

            await redirectionLinkAssertion(menu.getPage(), link.pageUrl, link.tabName);
        })
    }
})