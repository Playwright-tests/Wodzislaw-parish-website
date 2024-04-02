import { redirectionLinkAssertion } from "../common/assertions";
import { test } from "../fixtures/mainMenu";
import { getLinkTypes } from "../loaders/loaders";

const links = getLinkTypes('dropdownList');

test.describe('Main menu dropdown list',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.link + '" link of the drop-down list',async ({mainMenu, page}) => {
            
            await test.step('Hover over the "Informacje stałe"',async () => {
                
                await (await mainMenu.getDropdownList()).hoverParent();
            })

            await test.step('Click the "' + link.link + '" link',async () => {
                
                await (await mainMenu.getDropdownList()).clickLink(link.link);
            })

            await redirectionLinkAssertion(page, link.pageUrl, link.tabName);
        })
    }
})