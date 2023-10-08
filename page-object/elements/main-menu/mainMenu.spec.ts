import { Page } from "@playwright/test";
import { BasePage } from "../../base/basePage.spec";
import { DropdownList } from "./dropdownList.spec";

export class MainMenu extends BasePage {

    private dropdownList: DropdownList;

    constructor(page: Page) {

        super(page);

        this.dropdownList = new DropdownList(page);
    }

    async clickLink(linkText: string) {

        await this.page.getByRole('link', {name: linkText}).click();
    }

    async getDropdownList() {

        return this.dropdownList;
    }
}