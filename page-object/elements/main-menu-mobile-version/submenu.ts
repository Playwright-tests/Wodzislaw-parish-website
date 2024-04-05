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

    async touchTriggerElement(): Promise<void> {

        await this.triggerElement.click();
    }

    async touchArrow(): Promise<void> {

        await this.arrow.click();
    }

    getSubmenuSelector(): string {

        return this.submenuSelector;
    }

    async touchItem(itemName: string): Promise<void> {

        await this.getPage().getByRole('menuitem', {name: itemName}).click();
    }

    getItem(itemName: string) {

        return this.getPage().getByRole('menuitem', {name: itemName});
    }
}