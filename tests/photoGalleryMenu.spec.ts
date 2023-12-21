import { URLs } from "../enums/URLs.spec";
import { Years } from "../enums/years.spec";
import { test, expect } from "../fixtures/subpageMenu_1.spec"
import { getPhotoGalleryLinkData } from "../loaders/linkData.spec";

test.use({ url: URLs.PHOTO_GALLERY });

const linkData = getPhotoGalleryLinkData();

test.describe('Photo gallery menu tests',async () => {

    for(let i = Years.BEGIN_YEAR; i > Years.END_YEAR - 1; i--) {

        const linkText = linkData.partOfLinkText + i.toString();
        const expectedUrl = linkData.partOfExpectedUrl + i.toString() + '/'; 

        test('Clicking the "' + linkText + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + linkText + '" link',async () => {
               
                await menu.clickLink(linkText);

            } )

            await expect(page).toHaveURL(expectedUrl);
            await expect(page).toHaveTitle(linkText);
        })
    }

})