import { test, expect } from "../fixtures/subDropdownList";

test.describe('Sub dropdown list menu',async () => {
    
    test('Expanding and collapsing the dsub dropdown list menu',async ({subDropdownList}) => {
        
        await test.step('Touch the arrow',async () => {
            await subDropdownList.touchArrow();
        })

        await expect(subDropdownList.getSubmenuLocator()).toBeVisible();
    })
})