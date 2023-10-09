import { test as base } from "./mainMenu.spec";
import { Menu_2 } from "../page-object/elements/menu_2.spec";

type ParishHistoryMenuFixture = {

    parishHistoryMenu: Menu_2
}

export const test = base.extend<ParishHistoryMenuFixture>({

    parishHistoryMenu:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl');

        const parishHistoryMenu = new Menu_2(page);

        await mainMenu.clickLink('Historia parafii');
        await use(parishHistoryMenu);
    }
})

export { expect } from "@playwright/test";