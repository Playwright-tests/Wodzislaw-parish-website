import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage.spec"

export class SearchResultsList extends BasePage {

    readonly listParent: Locator;
    readonly list: Locator;
    readonly notFoundMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.listParent = page.locator('#recent-posts');
        this.list = this.listParent.locator('li');
        this.notFoundMessage = page.getByText('Sorry, but nothing matched your search terms. Please try again with some different keywords.');
    }

    async isParentVisible() {

        return await this.listParent.isVisible();
    }

    async count() {

        return await this.list.count();
    }

    async getItemText(nth: number) {

        return await this.list.nth(nth).textContent();
    }

    async isMessageVisible() {

        return this.notFoundMessage.isVisible();
    }
}