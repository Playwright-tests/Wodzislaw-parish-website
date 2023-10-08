import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.spec";

type MainMenuFixture = {

    mainMenu: MainMenu
}

export const test = base.extend<MainMenuFixture>({

    mainMenu:async ({page}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const mainMenu = new MainMenu(page);

        await use(mainMenu);
    }
})

export { expect } from "@playwright/test";