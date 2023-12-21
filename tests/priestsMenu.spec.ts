import { URLs } from "../enums/URLs.spec";
import { test, expect } from "../fixtures/subpageMenu.spec";
import { getLinkData } from "../loaders/linkData.spec";

test.use({ url: URLs.PRIESTS });

const linkData = getLinkData('priests');

test.describe('Priests menu links',async () => {
    
    for(const data of linkData) {

        test('Clicking the "' + data.link + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + data.link + '" link',async () => {
                
                await menu.clickLink(data.link);
            })

            await expect(page).toHaveURL(data.pageUrl);
            await expect(page).toHaveTitle(data.tabName);
        })
    }
})


