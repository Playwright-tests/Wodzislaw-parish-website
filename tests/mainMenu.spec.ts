import { test, expect } from "../fixtures/mainMenu.spec";
import { mainMenuLinks } from "../data/mainMenu.spec";


test.describe('Main menu tests', async () => {
    
    for(let i = 0; i < mainMenuLinks.length; i++) {

        test('Clicking the "' + mainMenuLinks[i].link + '" link',async ({page, mainMenu}) => {
            
            await test.step('Click the "' + mainMenuLinks[i].link + '" link',async () => {
                
                await mainMenu.clickLink(mainMenuLinks[i].link);
            })

            await expect(page).toHaveURL(mainMenuLinks[i].pageUrl);
            await expect(page).toHaveTitle(mainMenuLinks[i].tabName);
        })
    }

})