import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';

test('page object model', async ({page}) => {

    //Login page
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('pavanol','test@123')
    await loginPage.loginbutton.click();
    await page.waitForTimeout(3000);

    //Home Page
    const homePage = new HomePage(page);
    await homePage.addproducttocart('Samsung galaxy s6')
    await page.waitForTimeout(3000);
    await homePage.goToCart();
    
    


})