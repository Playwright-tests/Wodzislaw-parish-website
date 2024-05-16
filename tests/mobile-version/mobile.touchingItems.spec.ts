import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { test, expect } from "../../fixtures/mainMenu";
import { getLinkTypes } from "../../loaders/loaders";
import { configureAllureTest, setAllureParameters, setAttachment } from "../../common/allure";

test.use({isExpanded: true});

const links = getLinkTypes('mainMenu');

test.describe('The main menu items',async () => {
    
    for(const link of links) {

        test('Touching the "' + link.name + '" menu item',async ({mainMenuMobileVersion}) => {
            
            await allure.tag('Main menu');
            await allure.tag('Dropdown list');
            await allure.tag('Items');
            await allure.tag('Links');
            await configureAllureTest('Touching the "' + link.name + '" link', Severity.CRITICAL);
            await setAllureParameters(link);
            await setAttachment(link.name, mainMenuMobileVersion.getItem(link.name));

            await allure.step('Touch the "' + link + '" menu item',async () => {
                await mainMenuMobileVersion.touchItem(link.name);
            })

            await expect(mainMenuMobileVersion.getPage()).toHaveURL(link.pageUrl);
        })
    }
})