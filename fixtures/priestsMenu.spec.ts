import { test as base } from "../fixtures/mainMenu.spec";
import { Menu } from "../page-object/elements/menu.spec";

type PriestsMenuFixture = {

    priestsMenu: Menu
}

export const test = base.extend<PriestsMenuFixture>({

    priestsMenu:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const priestsMenu = new Menu(page);

        await mainMenu.clickLink('Duszpasterze');
        await use(priestsMenu);
    }
})

export { expect } from "@playwright/test";