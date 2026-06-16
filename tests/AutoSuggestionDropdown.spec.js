const { test, expect } = require('@playwright/test');

test('Handle AutoSuggestion Dropdown', async ({ page }) => {
    await page.goto('https://www.abhibus.com/');

    // Correct input locator
    const fromInput = page.locator("//input[@placeholder='Leaving From']");
    await fromInput.fill('Hyderabad');

    // Wait for suggestions to appear
    await page.waitForSelector("(//ul)[1]", { timeout: 3000 });

    // Get all matching options
    const autoOptions = await page.$$("(//div[contains(@class,'container station-item')])//div/div[1]");
    for (const option of autoOptions) {
        const text = await option.textContent();
        console.log(text); // Just print the text

        if(text.includes('Bangalore Karnataka')) {
            await option.click();
            break;
        }
    }

    // Optionally, click the first suggestion

    await page.waitForTimeout(3000); // pause for 3 seconds to observe
});