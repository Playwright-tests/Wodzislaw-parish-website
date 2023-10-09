import { test as base } from "./mainMenu.spec";
import { Menu_2 } from "../page-object/elements/menu_2.spec";

type ParishGroupsMenuFixture = {

    parishGroupsMenu: Menu_2
}

export const test = base.extend<ParishGroupsMenuFixture>({

    parishGroupsMenu:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl');

        const parishGroupsMenu = new Menu_2(page);

        await mainMenu.clickLink('Grupy parafialne');
        await use(parishGroupsMenu);
    }
})

export { expect } from "@playwright/test";