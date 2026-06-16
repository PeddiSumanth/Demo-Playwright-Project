const{test, expect} = require('@playwright/test');

test( 'HomePage', async ( { page } ) => {

    await page.goto('https://www.demoblaze.com/');
    
    const title = await page.title();
    console.log("Page title: " + title);
    
    await expect(page).toHaveTitle('STORE');

    const url = await page.url();
    console.log("Page URL: " + url);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();

}

);