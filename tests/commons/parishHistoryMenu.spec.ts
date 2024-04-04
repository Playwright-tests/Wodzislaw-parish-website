import { redirectionLinkAssertion } from "../common/assertions";
import { URLs } from "../enums/URLs";
import { test } from "../fixtures/subpageMenu";
import { getLinkTypes } from "../loaders/loaders";

test.use({ url: URLs.PARISH_HISTORY });

const links = getLinkTypes('parishHistory');

test.describe('Parish history menu tests',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.link + '" link',async ({menu}) => {
            
            await test.step('Click the "' + link.link + '" link',async () => {
                
                await menu.clickLink(link.link);
            })

            await redirectionLinkAssertion(menu.getPage(), link.pageUrl, link.tabName);
        })
    }
})