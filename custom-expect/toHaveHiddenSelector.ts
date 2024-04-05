import { expect as baseExpect, Page } from "@playwright/test";

export const expect = baseExpect.extend({

    async toHaveHiddenSelector(page: Page, selector: string) {

        const assertionName = 'toHaveHiddenSelector';
        let pass: boolean;

        try {
            await page.waitForSelector(selector, {timeout: 6000, state: 'hidden'});
            pass = true;
        } catch(e: any) {
            pass = false
        }

        const message = pass ? () => 'The selector "' + selector + '" is hidden' :
                               () => 'The selector "' + selector + '" is visible';

        return {
            name: assertionName,
            pass,
            message
        }
    }
})