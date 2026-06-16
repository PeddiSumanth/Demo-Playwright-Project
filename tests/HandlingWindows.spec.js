const{test, expect, chromium} = require('@playwright/test');

test('Handling Windows', async ({}) => {

  const browser = await chromium.launch()
  const context = await browser.newContext();

    const page1 = await context.newPage();
    //const page2 = await context.newPage();

   const NoOfpages = context.pages() // returns array of all open pages in the context
   console.log("Number of open pages: " + NoOfpages.length);

   await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await expect(page1).toHaveTitle('OrangeHRM')

  const pagepronise = context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newpage = await pagepronise;
    await expect(newpage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')
    
    await page1.waitForTimeout(3000);
    await newpage.waitForTimeout(3000);
    
   

    await page1.close();
     await newpage.close();





})