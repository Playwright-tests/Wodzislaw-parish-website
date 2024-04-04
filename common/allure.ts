import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { Link } from "../types/types";

export async function setAllureParameters(link: Link) {
    
    await allure.parameter('Link', link.link);
    await allure.parameter('Expected page URL', link.pageUrl);
    await allure.parameter('Expected tab name', link.tabName);
}

export async function configureAllureTest(description: string, severity: Severity) {
    
    await allure.epic('E2E tests');
    await allure.description(description);
    await allure.severity(severity);
}