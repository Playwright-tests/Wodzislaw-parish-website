import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/basePage";

export class DropdownList extends BasePage {

    readonly parent: Locator;

    constructor(page: Page) {

        super(page);

        this.parent = page.getByRole('link', {name: 'Informacje stałe', exact: false});
    }

    async hoverParent() {

        await this.parent.hover();
    }

    async clickLink(linkText: string) {

        await this.getPage().getByRole('link', {name: linkText}).click();
    }
}