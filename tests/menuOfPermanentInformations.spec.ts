import { dropdownListItems, mainMenuLinks } from "../data/mainMenu.spec";
import { test, expect } from "../fixtures/menuOfPermanentInformations.spec";

test.describe('Menu of permanent informations tests',async () => {
    
    for(let i = 0; i < dropdownListItems.length; i++) {

        test('Clicking the "' + dropdownListItems[i].link + '" link',async ({page, menuOfPermanentInformations}) => {
            
            await test.step('Click the "' + dropdownListItems[i] + '" link',async () => {
                
                await menuOfPermanentInformations.clickLink(dropdownListItems[i].link);
            })

            await expect(page).toHaveURL(dropdownListItems[i].pageUrl);
            await expect(page).toHaveTitle(dropdownListItems[i].tabName);
        })
    }
})