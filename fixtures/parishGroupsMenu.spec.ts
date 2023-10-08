import { test as base } from "./mainMenu.spec";
import { ParishGroupsMenu } from "../page-object/elements/parishGroupsMenu.spec";

type ParishGroupsMenuFixture = {

    parishGroupsMenu: ParishGroupsMenu
}

export const test = base.extend<ParishGroupsMenuFixture>({

    parishGroupsMenu:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl');

        const parishGroupsMenu = new ParishGroupsMenu(page);

        await mainMenu.clickLink('Grupy parafialne');
        await use(parishGroupsMenu);
    }
})

export { expect } from "@playwright/test";