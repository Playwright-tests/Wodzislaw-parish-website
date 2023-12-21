import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.spec";
import { Menu_2 } from "../page-object/elements/menu_2.spec";

export type Url = {

    url: string;
};

export type SubpageMenuFixture_1 = {

    menu: Menu_2
}

export const test = base.extend<Url & SubpageMenuFixture_1>({

    url: ['Default url', {option: true}],

    menu:async ({page, url}, use) => {
       
        const menu = new Menu_2(page);
        const mainMenu = new MainMenu(page);
        
        await mainMenu.goto(url);
        await use(menu);
    }
})

export { expect } from "@playwright/test";



