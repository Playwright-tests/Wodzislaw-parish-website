import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class Menu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickLink(linkText: string): Promise<void> {

        await this.getPage().locator('#site-aside').getByRole('link', {name: linkText}).click();
    }

    getLinkLocator(linkText: string): Locator {

        return this.getPage().locator('#site-aside').getByRole('link', {name: linkText});
    }
}