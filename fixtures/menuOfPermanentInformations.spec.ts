import { test as base } from "../fixtures/mainMenu.spec";
import { MenuOfPermanentInformations } from "../page-object/elements/menuOfPermanentInformations.spec";
import { MainMenu } from "../page-object/elements/main-menu/mainMenu.spec";

type MenuOfPermanentInformationsFixture = {

    menuOfPermanentInformations: MenuOfPermanentInformations
}

export const test = base.extend<MenuOfPermanentInformationsFixture>({

    menuOfPermanentInformations:async ({page, mainMenu}, use) => {
        
        await page.goto('https://wnmp.pl/');

        const menuOfPermanentInformations = new MenuOfPermanentInformations(page);
        
        await (await mainMenu.getDropdownList()).hoverParent();
        (await mainMenu.getDropdownList()).clickLink('Porządek Mszy św. i nabożeństw');

        await use(menuOfPermanentInformations);
    }
})

export { expect } from "@playwright/test";