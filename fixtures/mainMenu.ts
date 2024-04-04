import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.";
import { URLs } from "../enums/URLs";
import { MainMenuMobileMobileVersion } from "../page-object/elements/main-menu-mobile/mainMenuMobileMobileVersion";

export { expect } from "@playwright/test";

export const test = base.extend<{mainMenu: MainMenu} & {mainMenuMobileVersion: MainMenuMobileMobileVersion} &
                                {isExpanded: boolean}>({

    isExpanded: [false, {option: true}],

    mainMenu:async ({page}, use) => {

        const mainMenu = new MainMenu(page);
        
        await mainMenu.goto(URLs.HOME_PAGE);
        await use(mainMenu);
    },

    mainMenuMobileVersion:async ({page, isExpanded}, use) => {
        
        const mainMenuMobileVersion = new MainMenuMobileMobileVersion(page);
        await mainMenuMobileVersion.goto(URLs.HOME_PAGE);

        if(isExpanded) {
            await mainMenuMobileVersion.touchTriggerElement();
        };

        await use(mainMenuMobileVersion);
    }
})