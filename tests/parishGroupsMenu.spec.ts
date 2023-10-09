import { parishGroupsLinks } from "../data/parishGroupsMenu.spec";
import { test, expect } from "../fixtures/subpageMenu_1.spec";

test.use({ mainMenuLink: 'Grupy parafialne' });

test.describe('Parish groups menu tests',async () => {
    
    for(let i = 0; i < parishGroupsLinks.length; i++) {

        test('Clicking the "' + parishGroupsLinks[i].link + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + parishGroupsLinks[i].link + '" link',async () => {
                
                await menu.clickLink(parishGroupsLinks[i].link);
            })

            await expect(page).toHaveURL(parishGroupsLinks[i].pageUrl);
            await expect(page).toHaveTitle(parishGroupsLinks[i].tabName);
        })
    }
})