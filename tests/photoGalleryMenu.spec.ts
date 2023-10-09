import { photoGalleryMenuData } from "../data/photoGalleryMenu.spec";
import { test, expect } from "../fixtures/subpageMenu_1.spec"

test.use({ mainMenuLink: 'Galeria zdjęć' });

test.describe('Photo gallery menu tests',async () => {
    
    const beginValue = 2023;
    const endValue = 2005;

    for(let i = beginValue; i > beginValue - 1; i--) {

        const linkText = photoGalleryMenuData.partOfLinkText + i.toString();
        const expectedUrl = photoGalleryMenuData.partOfExpectedUrl + i.toString() + '/'; 

        test('Clicking the "' + linkText + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + linkText + '" link',async () => {
                
                await menu.clickLink(linkText);
            } )

            await expect(page).toHaveURL(expectedUrl);
            await expect(page).toHaveTitle(linkText);
        })
    }

})