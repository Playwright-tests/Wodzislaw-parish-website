/*import { test as base } from "./mainMenu.spec";
import { Menu_1 } from "../page-object/elements/menu_1.spec";


type MainMenuDropDownListFixture = {

    menu: Menu_1
}

export const test = base.extend<MainMenuDropDownListFixture>({

    menu:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const menu = new Menu_1(page);

        await use(menu);
    }
})

export { expect } from "@playwright/test";*/