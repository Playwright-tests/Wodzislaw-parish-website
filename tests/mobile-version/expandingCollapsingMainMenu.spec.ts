import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { test, expect } from "../../fixtures/mainMenu";
import { configureAllureTest } from "../../common/allure";

test.describe('Main menu',async () => {
    
    test('Expanding and collapsing the menu dropdown list',async ({mainMenuMobileVersion: mainMenuMobileVersion}) => {
        
        await configureAllureTest('Expanding and collapsing the menu dropdown list', Severity.CRITICAL);

        await allure.step('Touch the trigger element',async () => {
            await mainMenuMobileVersion.touchTriggerElement();
        })

        await expect(mainMenuMobileVersion.getDropdownElement()).toBeVisible();

        await allure.step('Touch the trigger element again',async () => {
            await mainMenuMobileVersion.touchTriggerElement();
        })

        await expect(mainMenuMobileVersion.getDropdownElement()).not.toBeVisible();
    })
})