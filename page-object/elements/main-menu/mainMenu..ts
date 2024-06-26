import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/basePage";
import { DropdownList } from "./dropdownList";

export class MainMenu extends BasePage {

    private dropdownList: DropdownList;

    constructor(page: Page) {

        super(page);

        this.dropdownList = new DropdownList(page);
    }

    async clickLink(linkText: string) {

        await this.getPage().getByRole('link', {name: linkText}).click();
    }

    getLinkLocator(linkText: string): Locator {

        return this.getPage().getByRole('link', {name: linkText});
    }

    getDropdownList(): DropdownList {

        return this.dropdownList;
    }
}