import { Page } from "@playwright/test";
import { BasePage } from "../base/basePage.spec";


export class Menu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickLink(linkText: string) {

        await this.page.getByRole('link', {name: linkText, exact: true}).click();
    }
}