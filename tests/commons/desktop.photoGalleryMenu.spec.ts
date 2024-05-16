import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { redirectionLinkAssertion } from "../../common/assertions";
import { URLs } from "../../enums/URLs";
import { Years } from "../../enums/years";
import { test } from "../../fixtures/subpageMenu"
import { getPhotoGalleryData } from "../../loaders/loaders";
import { configureAllureTest, setAttachment } from "../../common/allure";

test.use({ url: URLs.PHOTO_GALLERY });

const linkData = getPhotoGalleryData();

test.describe('Photo gallery menu tests',async () => {

    for(let i = Years.BEGIN_YEAR; i > Years.END_YEAR - 1; i--) {

        const linkText = linkData.partialLinkText + i.toString();
        const expectedUrl = linkData.partialUrl + i.toString() + '/'; 

        test('Clicking the "' + linkText + '" link',async ({menu}) => {
           
            await allure.tag('Menu');
            await allure.tag('Links');
            await configureAllureTest('Clicking the "' + linkText + '" link', Severity.CRITICAL);
            await allure.parameter('link', linkText);
            await allure.parameter('expected page URL', expectedUrl);
            await setAttachment(linkText, menu.getLinkLocator(linkText));

            await allure.step('Click the "' + linkText + '" link',async () => {
               
                await menu.clickLink(linkText);

            } )

            await redirectionLinkAssertion(menu.getPage(), expectedUrl, linkText);
        })
    }

})