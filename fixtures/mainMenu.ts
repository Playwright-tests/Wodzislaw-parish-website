import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.";
import { URLs } from "../enums/URLs";

type MainMenuFixture = {

    mainMenu: MainMenu
}

export const test = base.extend<MainMenuFixture>({

    mainMenu:async ({page}, use) => {

        const mainMenu = new MainMenu(page);
        
        await mainMenu.goto(URLs.HOME_PAGE);
        await use(mainMenu);
    }
})

export { expect } from "@playwright/test";