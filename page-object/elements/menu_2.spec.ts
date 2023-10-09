import { Page } from "@playwright/test";
import { BasePage } from "../base/basePage.spec";

export class Menu_2 extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickLink(linkText: string) {

        await this.page.locator('#site-aside').getByRole('link', {name: linkText}).click();
    }
}