import { test as base } from "./mainMenu.spec";
import { Menu } from "../page-object/elements/menu.spec";


type MenuOfPermanentInformationsFixture = {

    menuOfPermanentInformations: Menu
}

export const test = base.extend<MenuOfPermanentInformationsFixture>({

    menuOfPermanentInformations:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const menuOfPermanentInformations = new Menu(page);
        
        await (await mainMenu.getDropdownList()).hoverParent();
        (await mainMenu.getDropdownList()).clickLink('Porządek Mszy św. i nabożeństw');

        await use(menuOfPermanentInformations);
    }
})

export { expect } from "@playwright/test";