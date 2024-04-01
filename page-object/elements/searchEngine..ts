import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class SearchEngine extends BasePage {

    readonly searchField: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {

        super(page);

        this.searchField = page.getByPlaceholder('Szukaj …');
        this.searchButton = page.getByRole('button', {name: 'Szukaj'});
    }

    async setPhrase(phrase: string) {

        await this.searchField.fill(phrase);
    }

    async clickButton() {

        await this.searchButton.click();
    }
}