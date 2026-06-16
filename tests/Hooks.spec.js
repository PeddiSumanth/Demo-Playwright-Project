const { test, expect } = require('@playwright/test');

let page;
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    //Home page
    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()
})
 //logout
 test.afterEach(async () => {
    await page.locator('#logout2').click()
    await page.close();
})

test('Testing Hooks', async ({}) => {
    
        //Hompage products validation
   const products =await page.locator('.hrefch')
   expect(products).toHaveCount(9)


})

test('Hooks-2', async ({}) => {

    //product adding to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    })
    
    await page.waitForTimeout(3000)
})