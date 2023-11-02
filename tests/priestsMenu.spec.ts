import { test, expect } from "../fixtures/subpageMenu_2.spec";
import { JSONReader } from "../JSON-reader/JSONReader.spec";

test.use({ mainMenuLink: 'Duszpasterze' });

const testdata = JSONReader.get();

test.describe('Priests menu links',async () => {
    
    for(let i = 0; i < testdata.priests.length; i++) {

        test('Clicking the "' + testdata.priests[i].link + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + testdata.priests[i] + '" link',async () => {
                
                await menu.clickLink(testdata.priests[i].link);
            })

            await expect(page).toHaveURL(testdata.priests[i].pageUrl);
            await expect(page).toHaveTitle(testdata.priests[i].tabName);
        })
    }
})


