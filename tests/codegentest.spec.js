import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('admin@123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://www.demoblaze.com/');
});