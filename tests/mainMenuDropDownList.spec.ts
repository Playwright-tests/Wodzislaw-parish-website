import { dropdownListItems, mainMenuLinks } from "../data/mainMenu.spec";
import { test, expect } from "../fixtures/mainMenu.spec";


test.describe('Main menu drop-down list tests',async () => {
    
    for(let i = 0; i < dropdownListItems.length; i++) {

        test('Clicking the "' + dropdownListItems[i].link + '" link',async ({page, mainMenu}) => {
            
            await test.step('Hover over the drop-down list parent',async () => {
                
                await (await mainMenu.getDropdownList()).hoverParent();
            })

            await test.step('Click the "' + dropdownListItems[i] + '" link',async () => {
                
                await (await mainMenu.getDropdownList()).clickLink(dropdownListItems[i].link);
            })

            await expect(page).toHaveURL(dropdownListItems[i].pageUrl);
            await expect(page).toHaveTitle(dropdownListItems[i].tabName);
        })
    }
})