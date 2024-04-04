import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.";
import { URLs } from "../enums/URLs";
import { MainMenuMobileVersion } from "../page-object/elements/main-menu-mobile-version/mainMenuMobileMobileVersion";

export { expect } from "@playwright/test";

export const test = base.extend<{mainMenu: MainMenu} & {mainMenuMobileVersion: MainMenuMobileVersion} &
                                {isExpanded: boolean}>({

    isExpanded: [false, {option: true}],

    mainMenu:async ({page}, use) => {

        const mainMenu = new MainMenu(page);
        
        await mainMenu.goto(URLs.HOME_PAGE);
        await use(mainMenu);
    },

    mainMenuMobileVersion:async ({page, isExpanded}, use) => {
        
        const mainMenuMobileVersion = new MainMenuMobileVersion(page);
        await mainMenuMobileVersion.goto(URLs.HOME_PAGE);

        if(isExpanded) {
            await mainMenuMobileVersion.touchTriggerElement();
        };

        await use(mainMenuMobileVersion);
    }
})