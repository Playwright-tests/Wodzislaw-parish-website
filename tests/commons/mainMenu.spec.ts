import { allure } from "allure-playwright";
import { redirectionLinkAssertion } from "../../common/assertions";
import { test } from "../../fixtures/mainMenu";
import { getLinkTypes } from "../../loaders/loaders";

const links = getLinkTypes('mainMenu');

test.describe('Main menu links',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.link + '" link',async ({mainMenu}) => {
            
            await allure.parameter('link', link.link);
            await allure.parameter('expected page URL', link.pageUrl);
            await allure.parameter('expected tab name', link.tabName);

            await allure.step('Click the "' + link.link + '" link',async () => {
                
                await mainMenu.clickLink(link.link);
            })

            await redirectionLinkAssertion(mainMenu.getPage(), link.pageUrl, link.tabName);
        })
    }   
})