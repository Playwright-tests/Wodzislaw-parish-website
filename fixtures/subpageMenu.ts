import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.";
import { Menu } from "../page-object/elements/menu.";

export { expect } from "@playwright/test";

export const test = base.extend<{url: string} & {menu: Menu}>({

    url: ['Default url', {option: true}],

    menu:async ({page, url}, use) => {
       
        const menu = new Menu(page);
        const mainMenu = new MainMenu(page);
        
        await mainMenu.goto(url);
        await use(menu);
    }
})



