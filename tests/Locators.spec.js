import{test, expect} from '@playwright/test';

test('Locators', async ({ page }) => {

await page.goto('https://www.demoblaze.com/');

await page.locator('id=login2').click();
//await page.click('#login2');

await page.locator('#loginusername').fill('pavanol')
//await page.fill('#loginusername', 'pavanol');

await page.locator('#loginpassword').fill('test@123')
//await page.fill('#loginpassword', 'test@123');
//await page.type('#loginpassword', 'test@123');

await page.click("//button[normalize-space()=\"Log in\"]");

const Logoutlink =await page.locator("(//a[normalize-space()='Log out'])[1]");

await expect(Logoutlink).toBeVisible(); 

await page.close();


});