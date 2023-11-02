import { test, expect } from "../fixtures/mainMenu.spec";
import { dropdownListItems, mainMenuLinks } from "../data/mainMenu.spec";
import { JSONReader } from "../JSON-reader/JSONReader.spec";

const testdata = JSONReader.get();

test.describe('Main menu tests', async () => {
    
    for(let i = 0; i < testdata.mainMenu.length; i++) {

        test('Clicking the "' + testdata.mainMenu[i].link + '" link',async ({page, mainMenu}) => {
            
            await test.step('Click the "' + testdata.mainMenu[i].link + '" link',async () => {
                
                await mainMenu.clickLink(testdata.mainMenu[i].link);
            })

            await expect(page).toHaveURL(testdata.mainMenu[i].pageUrl);
            await expect(page).toHaveTitle(testdata.mainMenu[i].tabName);
        })
    }

    for(let i = 0; i < testdata.dropdownList.length; i++) {

        test('Clicking the "' + testdata.dropdownList[i].link + '" link of the drop-down list',async ({page, mainMenu}) => {
            
            await test.step('Hover over the "Informacje stałe"',async () => {
                
                await (await mainMenu.getDropdownList()).hoverParent();
            })

            await test.step('Click the "' + testdata.dropdownList[i].link + '" link',async () => {
                
                await (await mainMenu.getDropdownList()).clickLink(testdata.dropdownList[i].link);
            })

            await expect(page).toHaveURL(testdata.dropdownList[i].pageUrl);
            await expect(page).toHaveTitle(testdata.dropdownList[i].tabName);
        })
    }
})