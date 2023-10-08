import { test, expect } from "../fixtures/mainMenu.spec";
import { dropdownListItems, mainMenuLinks } from "../data/mainMenu.spec";


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

    for(let i = 0; i < dropdownListItems.length; i++) {

        test('Clicking the "' + dropdownListItems[i].link + '" link of the drop-down list',async ({page, mainMenu}) => {
            
            await test.step('Hover over the "Informacje stałe"',async () => {
                
                await (await mainMenu.getDropdownList()).hoverParent();
            })

            await test.step('Click the "' + dropdownListItems[i].link + '" link',async () => {
                
                await (await mainMenu.getDropdownList()).clickLink(dropdownListItems[i].link);
            })

            await expect(page).toHaveURL(dropdownListItems[i].pageUrl);
            await expect(page).toHaveTitle(dropdownListItems[i].tabName);
        })
    }
})