const{test,expect}=require('@playwright/test');

test('Handle CheckBox', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const sundayCheckbox = page.locator("//input[@id='sunday' and @type='checkbox']")
    await sundayCheckbox.check()
    await expect(sundayCheckbox).toBeChecked()
    await expect(await sundayCheckbox.isChecked()).toBeTruthy()

    await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page

    const Checkboxlocator = [
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='tuesday' and @type='checkbox']",
        "//input[@id='wednesday' and @type='checkbox']",
    ]
    for (const locator of Checkboxlocator) {
        const checkbox = page.locator(locator)
        await checkbox.check()
        await expect(checkbox).toBeChecked()
        await expect(await checkbox.isChecked()).toBeTruthy()
    }

    await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page

    for (const locator of Checkboxlocator) {
        const checkbox = page.locator(locator)
        if (await checkbox.isChecked()) {
            await checkbox.uncheck()
        }
        await expect(checkbox).not.toBeChecked()
    }

})