import { URLs } from "../enums/URLs";
import { test as base } from "../fixtures/mainMenu";
import { Menu } from "../page-object/elements/menu.";

type PriestsMenuFixture = {

    priestsMenu: Menu
}

export const test = base.extend<PriestsMenuFixture>({

    priestsMenu:async ({page, mainMenu}, use) => {
        
        const priestsMenu = new Menu(page);

        await mainMenu.goto(URLs.HOME_PAGE);
        await mainMenu.clickLink('Duszpasterze');
        await use(priestsMenu);
    }
})

export { expect } from "@playwright/test";