import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.spec";
import { Menu_2 } from "../page-object/elements/menu_2.spec";

export type Link = {

    mainMenuLink: string;
};

export type SubpageMenuFixture_1 = {

    menu: Menu_2
}

export const test = base.extend<Link & SubpageMenuFixture_1>({

    mainMenuLink: ['Default link', {option: true}],

    menu:async ({page, mainMenuLink}, use) => {
       
        await page.goto('https://wnmp.pl/');

        const menu = new Menu_2(page);
        const mainMenu = new MainMenu(page);
        
        await mainMenu.clickLink(mainMenuLink);
        await use(menu);
    }
})

export { expect } from "@playwright/test";



