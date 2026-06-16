const{test, expect} = require('@playwright/test');

test('Handle DropDown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#country").selectOption('Canada');
    await page.locator("#country").selectOption({ label: 'India' });
    await page.locator("#country").selectOption({ index: 3 });
    await page.locator("#country").selectOption({ value: 'uk' });

    //number of options in dropdown
   const optionCount = await page.locator("#country option")
   await expect(optionCount).toHaveCount(10)

   //check number of options in dropdown using in Array
   // const options = await page.$$("#country option");
   // console.log("Number of options in dropdown: " + options.length);

    //const options = await page.$$("#country option");
    //await expect(options).toHaveCount(10);

    const options = await page.$$("#country option");
    let status = false;
    for (const option of options) {
        const text = await option.textContent();
        if (text.includes("India")) {
            status = true;
            break;
        }
    }

    await expect(status).toBeTruthy();

    await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page
});