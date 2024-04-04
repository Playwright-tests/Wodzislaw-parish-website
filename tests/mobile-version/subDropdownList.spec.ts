import { test, expect } from "../fixtures/subDropdownList";
import { expect as VS_expect } from "../custom-expect/toHaveVisibleSelector";
import { expect as HD_expect } from "../custom-expect/toHaveHiddenSelector";
import { getLinkTypes } from "../loaders/loaders";

const links = getLinkTypes('dropdownList');

test.describe('Sub dropdown list menu',async () => {
    
    test('Expanding and collapsing the dsub dropdown list menu',async ({subDropdownList}) => {
        
        await test.step('Touch the arrow',async () => {
            await subDropdownList.touchArrow();
        })

        await VS_expect(subDropdownList.getPage()).toHaveVisibleSelector(subDropdownList.getSubmenuSelector());

        await test.step('Touch the arrow again',async () => {
            await subDropdownList.touchArrow();
        })

        await HD_expect(subDropdownList.getPage()).toHaveHiddenSelector(subDropdownList.getSubmenuSelector());
    })

    for(const link of links) {

        test('Touching the "' + link.link + '" menu item',async ({expanded}) => {
            
            await test.step('Touch the "' + link.link + '" item',async () => {
                await expanded.touchItem(link.link);
            })

            await expect(expanded.getPage()).toHaveURL(link.pageUrl);
        })
    }
})