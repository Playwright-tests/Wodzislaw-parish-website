import { test, expect, Page } from '@playwright/test';


export class BasePage {

    readonly page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async getUrl() {

        return this.page.url();
    }
}