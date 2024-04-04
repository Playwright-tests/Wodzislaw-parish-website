import { allure } from "allure-playwright";
import { test, expect } from "../../fixtures/mainMenu";

test.describe('Main menu',async () => {
    
    test('Expanding and collapsing the menu dropdown list',async ({mainMenuMobileVersion: mainMenuMobileVersion}) => {
        
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