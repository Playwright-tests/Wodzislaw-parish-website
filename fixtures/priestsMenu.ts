import { URLs } from "../enums/URLs";
import { test as base } from "../fixtures/mainMenu";
import { Menu } from "../page-object/elements/menu.";

export { expect } from "@playwright/test";

export const test = base.extend<{menu: Menu}>({

    menu:async ({page, mainMenu}, use) => {
        
        const priestsMenu = new Menu(page);

        await mainMenu.goto(URLs.HOME_PAGE);
        await mainMenu.clickLink('Duszpasterze');
        await use(priestsMenu);
    }
})