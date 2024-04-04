import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/basePage";

export class Submenu extends BasePage {

    private readonly triggerElement: Locator;
    private readonly arrow: Locator;
    private readonly submenuSelector: string;

    constructor(page: Page) {

        super(page);

        this.triggerElement = page.getByRole('menuitem', {name: 'Informacje stałe'});
        this.arrow = this.triggerElement.locator('.slicknav_arrow');
        this.submenuSelector = '.sub-menu';
    }

    async touchTriggerElement() {

        await this.triggerElement.click();
    }

    async touchArrow() {

        await this.arrow.click();
    }

    getSubmenuSelector() {

        return this.submenuSelector;
    }

    async touchItem(itemName: string) {

        await this.getPage().getByRole('menuitem', {name: itemName}).click();
    }
}