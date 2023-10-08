import { parishGroupsLinks } from "../data/parishGroupsMenu.spec";
import { test, expect } from "../fixtures/parishGroupsMenu.spec";

test.describe('Parish groups menu tests',async () => {
    
    for(let i = 0; i < parishGroupsLinks.length; i++) {

        test('Clicking the "' + parishGroupsLinks[i].link + '" link',async ({page, parishGroupsMenu}) => {
            
            await test.step('Click the "' + parishGroupsLinks[i].link + '" link',async () => {
                
                await parishGroupsMenu.clickLink(parishGroupsLinks[i].link);
            })

            await expect(page).toHaveURL(parishGroupsLinks[i].pageUrl);
            await expect(page).toHaveTitle(parishGroupsLinks[i].tabName);
        })
    }
})