import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class SearchEngine extends BasePage {

    private readonly selector: string;
    private readonly searchField: Locator;
    private readonly searchButton: Locator;

    constructor(page: Page) {

        super(page);

        this.selector = '#search-9';
        this.searchField = page.getByPlaceholder('Szukaj …');
        this.searchButton = page.getByRole('button', {name: 'Szukaj'});
    }

    async setPhrase(phrase: string): Promise<void> {

        await this.searchField.fill(phrase);
    }

    async clickButton(): Promise<void> {

        await this.searchButton.click();
    }

    getSelector(): string {

        return this.selector;
    }
}