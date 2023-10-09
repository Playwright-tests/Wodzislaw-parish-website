import { test as base } from "../fixtures/mainMenu.spec";
import { Menu_1 } from "../page-object/elements/menu_1.spec";

type PriestsMenuFixture = {

    priestsMenu: Menu_1
}

export const test = base.extend<PriestsMenuFixture>({

    priestsMenu:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const priestsMenu = new Menu_1(page);

        await mainMenu.clickLink('Duszpasterze');
        await use(priestsMenu);
    }
})

export { expect } from "@playwright/test";