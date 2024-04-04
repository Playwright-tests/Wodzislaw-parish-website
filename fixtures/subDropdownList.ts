import { test as base } from "@playwright/test";
import { Submenu } from "../page-object/elements/main-menu-mobile-version/submenu";
import { MainMenuMobileVersion } from "../page-object/elements/main-menu-mobile-version/mainMenuMobileMobileVersion";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

export const test = base.extend<{subDropdownList: Submenu} & {expanded: Submenu}>({

    subDropdownList:async ({page}, use) => {
        
        const mainMenuMobileVersion = new MainMenuMobileVersion(page);
        await mainMenuMobileVersion.goto(URLs.HOME_PAGE);
        await mainMenuMobileVersion.touchTriggerElement();
        await use(new Submenu(page));
    },

    expanded:async ({page}, use) => {
        
        const mainMenuMobileMobileVersion = new MainMenuMobileVersion(page);
        const expanded = new Submenu(page);
        await mainMenuMobileMobileVersion.goto(URLs.HOME_PAGE);
        await mainMenuMobileMobileVersion.touchTriggerElement();
        await expanded.touchArrow();
        await use(expanded);
    }
})