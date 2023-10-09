import { parishHistoryMenuLinks } from "../data/parishHistoryMenu.spec";
import { test, expect } from "../fixtures/parishHistoryMenu.spec";

test.describe('Parish history menu tests',async () => {
    
    for(let i = 0; i < parishHistoryMenuLinks.length; i++) {

        test('Clicking the "' + parishHistoryMenuLinks[i].link + '" link',async ({page, parishHistoryMenu}) => {
            
            await test.step('Click the "' + parishHistoryMenuLinks[i].link + '" link',async () => {
                
                await parishHistoryMenu.clickLink(parishHistoryMenuLinks[i].link);
            })

            await expect(page).toHaveURL(parishHistoryMenuLinks[i].pageUrl);
            await expect(page).toHaveTitle(parishHistoryMenuLinks[i].tabName);
        })
    }
})