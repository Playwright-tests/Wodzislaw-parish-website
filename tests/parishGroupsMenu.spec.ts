import { JSONReader } from "../JSON-reader/JSONReader.spec";
import { test, expect } from "../fixtures/subpageMenu_1.spec";

test.use({ mainMenuLink: 'Grupy parafialne' });

const testdata = JSONReader.get();

test.describe('Parish groups menu tests',async () => {
    
    for(let i = 0; i < testdata.parishGroups.length; i++) {

        test('Clicking the "' + testdata.parishGroups[i].link + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + testdata.parishGroups[i].link + '" link',async () => {
                
                await menu.clickLink(testdata.parishGroups[i].link);
            })

            await expect(page).toHaveURL(testdata.parishGroups[i].pageUrl);
            await expect(page).toHaveTitle(testdata.parishGroups[i].tabName);
        })
    }
})