import{test, expect} from '@playwright/test';

test('Input and checkbox', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //input

    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();

    await page.locator("//input[@id='name']").fill('Sumanth')
    //await page.fill("//input[@id='name']", input)

    await page.locator("//input[@id='male']").check()
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    await page.locator("//input[@id='female']").uncheck()
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();  
    

await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page



})