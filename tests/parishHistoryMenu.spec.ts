import { parishHistoryMenuLinks } from "../data/parishHistoryMenu.spec";
import { test, expect } from "../fixtures/subpageMenu_1.spec";

test.use({ mainMenuLink: 'Historia parafii' });

test.describe('Parish history menu tests',async () => {
    
    for(let i = 0; i < parishHistoryMenuLinks.length; i++) {

        test('Clicking the "' + parishHistoryMenuLinks[i].link + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + parishHistoryMenuLinks[i].link + '" link',async () => {
                
                await menu.clickLink(parishHistoryMenuLinks[i].link);
            })

            await expect(page).toHaveURL(parishHistoryMenuLinks[i].pageUrl);
            await expect(page).toHaveTitle(parishHistoryMenuLinks[i].tabName);
        })
    }
})