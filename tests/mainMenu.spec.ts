import { test, expect } from "../fixtures/mainMenu.spec";
import { getLinkData } from "../loaders/linkData.spec";

const links = getLinkData('mainMenu');
const dropdownList = getLinkData('dropdownList');

test.describe('Main menu links',async () => {
    
    for(const data of links) {

        test('Clicking the "' + data.link + '" link',async ({mainMenu, page}) => {
            
            await test.step('Click the "' + data.link + '" link',async () => {
                
                await mainMenu.clickLink(data.link);
            })

            await expect(page).toHaveURL(data.pageUrl);
            await expect(page).toHaveTitle(data.tabName); 
        })
    }   
})

test.describe('Main menu dropdown list',async () => {
    
    for(const data of dropdownList) {

        test('Clicking the "' + data.link + '" link of the drop-down list',async ({mainMenu, page}) => {
            
            await test.step('Hover over the "Informacje stałe"',async () => {
                
                await (await mainMenu.getDropdownList()).hoverParent();
            })

            await test.step('Click the "' + data.link + '" link',async () => {
                
                await (await mainMenu.getDropdownList()).clickLink(data.link);
            })

            await expect(page).toHaveURL(data.pageUrl);
            await expect(page).toHaveTitle(data.tabName);
        })
    }
})