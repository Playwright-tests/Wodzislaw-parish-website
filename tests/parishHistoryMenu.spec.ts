import { JSONReader } from "../JSON-reader/JSONReader.spec";
import { test, expect } from "../fixtures/subpageMenu_1.spec";

test.use({ mainMenuLink: 'Historia parafii' });

const testdata = JSONReader.get();

test.describe('Parish history menu tests',async () => {
    
    for(let i = 0; i < testdata.parishHistory.length; i++) {

        test('Clicking the "' + testdata.parishHistory[i].link + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + testdata.parishHistory[i].link + '" link',async () => {
                
                await menu.clickLink(testdata.parishHistory[i].link);
            })

            await expect(page).toHaveURL(testdata.parishHistory[i].pageUrl);
            await expect(page).toHaveTitle(testdata.parishHistory[i].tabName);
        })
    }
})