import { test as base } from "./mainMenu.spec";
import { Menu_1 } from "../page-object/elements/menu_1.spec";


type MenuOfPermanentInformationsFixture = {

    menuOfPermanentInformations: Menu_1
}

export const test = base.extend<MenuOfPermanentInformationsFixture>({

    menuOfPermanentInformations:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const menuOfPermanentInformations = new Menu_1(page);
        
        await (await mainMenu.getDropdownList()).hoverParent();
        (await mainMenu.getDropdownList()).clickLink('Porządek Mszy św. i nabożeństw');

        await use(menuOfPermanentInformations);
    }
})

export { expect } from "@playwright/test";