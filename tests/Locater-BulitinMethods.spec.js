const{test, expect}= require('@playwright/test');

test('Built-in Methods', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltText() to locate an element, usually image, by its text alternative.

    const Logo = await page.getByAltText('company-branding');

    await expect(Logo).toBeVisible();

    //page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //page.getByRole() to locate an element by its role and accessible name.
    await page.getByRole('button', {type:'submit'}).click();

    //page.getByText() to locate by text content.

  await page.waitForSelector("//p[@class='oxd-userdropdown-name']");
  const Text = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
  await expect(page.getByText(Text)).toBeVisible(); 

});