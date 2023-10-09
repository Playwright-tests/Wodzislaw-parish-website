import { test, expect } from "../fixtures/subpageMenu_2.spec";
import { priestsMenuLinks } from "../data/priestsMenu.spec";

test.use({ mainMenuLink: 'Duszpasterze' });

test.describe('Priests menu links',async () => {
    
    for(let i = 0; i < priestsMenuLinks.length; i++) {

        test('Clicking the "' + priestsMenuLinks[i].link + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + priestsMenuLinks[i] + '" link',async () => {
                
                await menu.clickLink(priestsMenuLinks[i].link);
            })

            await expect(page).toHaveURL(priestsMenuLinks[i].pageUrl);
            await expect(page).toHaveTitle(priestsMenuLinks[i].tabName);
        })
    }
})


