const{test, expect} = require('@playwright/test');

test('Assertions', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/register')

    //expect(page).toHaveURL()	Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //expect(page).toHaveTitle()	Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //expect(locator).toBeVisible()	Element is visible
    const Logoelement = await page.locator('.header-logo')
    await expect(Logoelement).toBeVisible()
    
    //expect(locator).toBeEnabled()	Element is enabled
    const searchbox = await page.locator('#small-searchterms')
    await expect(searchbox).toBeEnabled()

    //expect(locator).toBeEnabled() Element is enabled (searchbox is enabled, not disabled)
    const searchbox1 = await page.locator("//input[@autocomplete='off']")
    await expect.soft(searchbox1).toBeEnabled()

    //expect(locator).toHaveText()	Element has text
    const registerbutton = await page.locator('#register-button')
    await expect(registerbutton).toHaveText('Register')  
    
    //expect(locator).toHaveAttribute()	Element has attribute
    const searchbutton = await page.locator('#register-button')
    await expect.soft(searchbutton).toHaveAttribute('id', 'register-button')

    //expect(locator).toHaveClass()	Element has class
    
})