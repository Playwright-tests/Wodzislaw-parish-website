import { test as base } from "@playwright/test";
import { Menu_1 } from "../page-object/elements/menu_1.spec";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.spec";

export type Link = {

    mainMenuLink: string,
};

export type SubpageMenuFixture_2 = {

    menu: Menu_1
}

export const test = base.extend<Link & SubpageMenuFixture_2>({

    mainMenuLink: ['Default link', {option: true}],

    menu:async ({page, mainMenuLink}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const menu = new Menu_1(page);
        const mainMenu = new MainMenu(page);

        await mainMenu.clickLink(mainMenuLink);
        await use(menu);
    }
})

export { expect } from "@playwright/test";