import { test, expect } from "../fixtures/mainMenu";
import { getLinkTypes } from "../loaders/loaders";

test.use({isExpanded: true});

const links = getLinkTypes('mainMenu');

test.describe('The main menu mobile version items',async () => {
    
    for(const link of links) {

        test('Touching the "' + link.link + '" menu item',async ({mainMenuMobileVersion: mainMenuMobileVersion}) => {
            
            await test.step('Touch the "' + link + '" menu item',async () => {
                await mainMenuMobileVersion.touchItem(link.link);
            })

            await expect(mainMenuMobileVersion.page).toHaveURL(link.pageUrl);
        })
    }
})