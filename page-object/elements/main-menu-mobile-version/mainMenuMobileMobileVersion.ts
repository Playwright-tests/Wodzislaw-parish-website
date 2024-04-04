import { Locator, Page } from "@playwright/test"
import { BasePage } from "../../base/basePage";

export class MainMenuMobileVersion extends BasePage {

    private readonly dropdownElement: Locator;
    private readonly triggerElement: Locator;

    constructor(page: Page) {

        super(page);

        this.triggerElement = page.getByRole('button', {name: 'Menu'});
        this.dropdownElement = page.getByRole('menu');
    }

    async touchTriggerElement() {

        await this.triggerElement.click();
    }

    getDropdownElement() {

        return this.dropdownElement;
    }

    async touchItem(itemName: string) {

        await this.getPage().getByRole('menuitem', {name: itemName}).click();
    }
}