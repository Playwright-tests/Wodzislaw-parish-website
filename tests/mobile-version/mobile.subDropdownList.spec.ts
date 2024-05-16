import { test, expect } from "../../fixtures/subDropdownList";
import { expect as VS_expect } from "../../custom-expect/toHaveVisibleSelector";
import { expect as HD_expect } from "../../custom-expect/toHaveHiddenSelector";
import { getLinkTypes } from "../../loaders/loaders";
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";
import { configureAllureTest, setAllureParameters, setAttachment, setAttachmentFullScreenshoot } from "../../common/allure";

const links = getLinkTypes('dropdownList');

test.describe('Sub dropdown list',async () => {
    
    test('Expanding and collapsing the "INFORMACJE STAŁE" dropdown list',async ({subDropdownList}) => {
        
        await allure.tag('Main menu');
        await allure.tag('Dropdown list');
        await configureAllureTest('Expanding and collapsing the "INFORMACJE STAŁE" dropdown list', Severity.CRITICAL)

        await allure.step('Touch the arrow',async () => {
            await subDropdownList.touchArrow();
        })

        await VS_expect.soft(subDropdownList.getPage()).toHaveVisibleSelector(subDropdownList.getSubmenuSelector());
        await setAttachmentFullScreenshoot('expanded', subDropdownList.getPage());

        await allure.step('Touch the arrow again',async () => {
            await subDropdownList.touchArrow();
        })

        await HD_expect.soft(subDropdownList.getPage()).toHaveHiddenSelector(subDropdownList.getSubmenuSelector());
        await setAttachmentFullScreenshoot('collapsed', subDropdownList.getPage());
    })

    for(const link of links) {

        test('Touching the "' + link.name + '" menu item',async ({expanded}) => {
            
            await configureAllureTest('Touching the "' + link.name + '" link', Severity.CRITICAL);
            await setAllureParameters(link);
            await setAttachment(link.name, expanded.getItem(link.name));

            await allure.step('Touch the "' + link.name + '" item',async () => {
                await expanded.touchItem(link.name);
            })

            await expect(expanded.getPage()).toHaveURL(link.pageUrl);
        })
    }
})