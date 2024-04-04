import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { test, expect } from "../../fixtures/mainMenu";
import { getLinkTypes } from "../../loaders/loaders";
import { configureAllureTest, setAllureParameters } from "../../common/allure";

test.use({isExpanded: true});

const links = getLinkTypes('mainMenu');

test.describe('The main menu items',async () => {
    
    for(const link of links) {

        test('Touching the "' + link.link + '" menu item',async ({mainMenuMobileVersion}) => {
            
            await configureAllureTest('Touching the "' + link.link + '" link', Severity.CRITICAL);
            await setAllureParameters(link);

            await allure.step('Touch the "' + link + '" menu item',async () => {
                await mainMenuMobileVersion.touchItem(link.link);
            })

            await expect(mainMenuMobileVersion.getPage()).toHaveURL(link.pageUrl);
        })
    }
})