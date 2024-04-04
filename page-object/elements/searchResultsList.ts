import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage"

export class SearchResultsList extends BasePage {

    readonly siteContentSelector: string;
    readonly listParent: Locator;
    readonly list: Locator;
    readonly notFoundMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.siteContentSelector = '#site-content';
        this.listParent = page.locator('#recent-posts');
        this.list = this.listParent.locator('li');
        this.notFoundMessage = page.getByText('Sorry, but nothing matched your search terms. Please try again with some different keywords.');
    }

    async isParentVisible(): Promise<boolean> {

        return await this.listParent.isVisible();
    }

    async count(): Promise<number> {

        return await this.list.count();
    }

    async getItemText(nth: number): Promise<string | null> {

        return await this.list.nth(nth).textContent();
    }

    async isMessageVisible(): Promise<boolean> {

        return this.notFoundMessage.isVisible();
    }

    getSiteContentSelector(): string {

        return this.siteContentSelector;
    }
}