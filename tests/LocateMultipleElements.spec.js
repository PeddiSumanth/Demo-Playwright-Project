const {test, expect} = require('@playwright/test');

test('Locate Multiple Elements', async ({ page }) => {

await page.goto('https://www.demoblaze.com/');

//const Alllinks = await page.$$('a');

//for(const link of Alllinks)
//{
  //    const linkText = await link.textContent();
    //  console.log(linkText);
//}
await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
const productname =await page.$$("//div[@id='tbodyid']//div//h4/a");

for(const prod of productname)
{
     const prodText = await prod.textContent();
     console.log(prodText);
}
});