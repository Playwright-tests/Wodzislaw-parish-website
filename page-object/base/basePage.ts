import { test, expect, Page } from '@playwright/test';


export class BasePage {

    private readonly page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async goto(url: string) {

        await this.page.goto(url);
    }

    getPage() {

        return this.page;
    }

    async getUrl() {

        return this.page.url();
    }
}