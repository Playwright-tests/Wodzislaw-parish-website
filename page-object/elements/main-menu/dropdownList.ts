import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/basePage";

export class DropdownList extends BasePage {

    readonly parent: Locator;

    constructor(page: Page) {

        super(page);

        this.parent = page.getByRole('link', {name: 'Informacje stałe', exact: false});
    }

    async hoverParent(): Promise<void> {

        await this.parent.hover();
    }

    async clickLink(linkText: string): Promise<void> {

        await this.getPage().getByRole('link', {name: linkText}).click();
    }

    getLinkLocator(linkText: string): Locator {
        
        return this.getPage().getByRole('link', {name: linkText});
    }
}