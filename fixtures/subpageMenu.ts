import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.";
import { Menu } from "../page-object/elements/menu.";

export type Url = {

    url: string;
};

export type SubpageMenuFixture_1 = {

    menu: Menu
}

export const test = base.extend<Url & SubpageMenuFixture_1>({

    url: ['Default url', {option: true}],

    menu:async ({page, url}, use) => {
       
        const menu = new Menu(page);
        const mainMenu = new MainMenu(page);
        
        await mainMenu.goto(url);
        await use(menu);
    }
})

export { expect } from "@playwright/test";



