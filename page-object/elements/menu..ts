import { Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class Menu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickLink(linkText: string) {

        await this.getPage().locator('#site-aside').getByRole('link', {name: linkText}).click();
    }
}