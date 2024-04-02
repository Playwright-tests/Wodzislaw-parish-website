import { redirectionLinkAssertion } from "../common/assertions";
import { test } from "../fixtures/mainMenu";
import { getLinkTypes } from "../loaders/loaders";

const links = getLinkTypes('mainMenu');

test.describe('Main menu links',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.link + '" link',async ({mainMenu, page}) => {
            
            await test.step('Click the "' + link.link + '" link',async () => {
                
                await mainMenu.clickLink(link.link);
            })

            await redirectionLinkAssertion(page, link.pageUrl, link.tabName);
        })
    }   
})