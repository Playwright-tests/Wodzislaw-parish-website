import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { Link } from "../types/types";
import { Locator } from "@playwright/test";

export async function setAllureParameters(link: Link): Promise<void> {
    
    await allure.parameter('Link', link.link);
    await allure.parameter('Expected page URL', link.pageUrl);
    await allure.parameter('Expected tab name', link.tabName);
}

export async function configureAllureTest(description: string, severity: Severity): Promise<void> {
    
    await allure.epic('E2E tests');
    await allure.description(description);
    await allure.severity(severity);
}

export async function setAttachment(fileName: string, locator: Locator): Promise<void> {
    
    await allure.attachment(fileName + '.png', await locator.screenshot(), {
        contentType: 'image/png'
    })
}