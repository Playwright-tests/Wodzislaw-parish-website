import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/basePage";

export class SubDropdownList extends BasePage {

    private readonly triggerElement: Locator;
    private readonly arrow: Locator;
    private readonly submenu: Locator;

    constructor(page: Page) {

        super(page);

        this.triggerElement = page.getByRole('menuitem', {name: 'Informacje stałe'});
        this.arrow = this.triggerElement.locator('.slicknav_arrow');
        this.submenu = page.locator('.menu').locator('#menu-item-10494')
                        .getByText('Porządek Mszy św. i nabożeństw Sakramenty – zasady udzielania');
    }

    async touchTriggerElement() {

        await this.triggerElement.click();
    }

    async touchArrow() {

        await this.arrow.click();
    }

    getSubmenuLocator() {

        return this.submenu;
    }
}