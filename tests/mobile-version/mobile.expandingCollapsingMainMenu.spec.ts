import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { test, expect } from "../../fixtures/mainMenu";
import { configureAllureTest, setAttachment, setAttachmentFullScreenshoot } from "../../common/allure";

test.describe('Main menu',async () => {
    
    test('Expanding and collapsing the menu dropdown list',async ({mainMenuMobileVersion}) => {
        
        await allure.tag('Main menu');
        await allure.tag('Dropdown list');
        await configureAllureTest('Expanding and collapsing the menu dropdown list', Severity.CRITICAL);

        await allure.step('Touch the trigger element',async () => {
            await mainMenuMobileVersion.touchTriggerElement();
        })

        await expect.soft(mainMenuMobileVersion.getDropdownElement()).toBeVisible();
        await setAttachmentFullScreenshoot('expanded', mainMenuMobileVersion.getPage());

        await allure.step('Touch the trigger element again',async () => {
            await mainMenuMobileVersion.touchTriggerElement();
        })

        await expect.soft(mainMenuMobileVersion.getDropdownElement()).not.toBeVisible();
        await setAttachmentFullScreenshoot('collapsed', mainMenuMobileVersion.getPage());
    })
})