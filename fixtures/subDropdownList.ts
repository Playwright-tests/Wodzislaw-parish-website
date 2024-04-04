import { test as base } from "@playwright/test";
import { SubDropdownList } from "../page-object/elements/main-menu-mobile/subDropDownList";
import { MainMenuMobileMobileVersion } from "../page-object/elements/main-menu-mobile/mainMenuMobileMobileVersion";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

export const test = base.extend<{subDropdownList: SubDropdownList}>({

    subDropdownList:async ({page}, use) => {
        
        const mainMenuMobileVersion = new MainMenuMobileMobileVersion(page);
        await mainMenuMobileVersion.goto(URLs.HOME_PAGE);
        await mainMenuMobileVersion.touchTriggerElement();
        await use(new SubDropdownList(page));
    }
})