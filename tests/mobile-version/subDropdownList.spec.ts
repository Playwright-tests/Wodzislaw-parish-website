import { test, expect } from "../../fixtures/subDropdownList";
import { expect as VS_expect } from "../../custom-expect/toHaveVisibleSelector";
import { expect as HD_expect } from "../../custom-expect/toHaveHiddenSelector";
import { getLinkTypes } from "../../loaders/loaders";
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { configureAllureTest, setAllureParameters } from "../../common/allure";

const links = getLinkTypes('dropdownList');

test.describe('Sub dropdown list',async () => {
    
    test('Expanding and collapsing the "INFORMACJE STAŁE" dropdown list',async ({subDropdownList}) => {
        
        await configureAllureTest('Expanding and collapsing the "INFORMACJE STAŁE" dropdown list', Severity.CRITICAL)

        await allure.step('Touch the arrow',async () => {
            await subDropdownList.touchArrow();
        })

        await VS_expect(subDropdownList.getPage()).toHaveVisibleSelector(subDropdownList.getSubmenuSelector());

        await allure.step('Touch the arrow again',async () => {
            await subDropdownList.touchArrow();
        })

        await HD_expect(subDropdownList.getPage()).toHaveHiddenSelector(subDropdownList.getSubmenuSelector());
    })

    for(const link of links) {

        test('Touching the "' + link.link + '" menu item',async ({expanded}) => {
            
            await configureAllureTest('Touching the "' + link.link + '" link', Severity.CRITICAL);
            await setAllureParameters(link);

            await allure.step('Touch the "' + link.link + '" item',async () => {
                await expanded.touchItem(link.link);
            })

            await expect(expanded.getPage()).toHaveURL(link.pageUrl);
        })
    }
})