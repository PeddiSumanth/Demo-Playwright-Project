const{test, expect} = require('@playwright/test');

test('Screenshot', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path:'C:\\JavaScript\\Playwrightwithjavascript\\Screenshots\\'+Date.now()+'\\HomePage.png'})
    
})

test('Screenshot-2', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(3000);
    await page.screenshot({path:'C:\\JavaScript\\Playwrightwithjavascript\\Screenshots\\'+Date.now()+'\\Fullpage.png', fullPage:true}) 
})

test.only('Screenshot-3', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(3000);
    await page.locator("//*[@id='tbodyid']/div[5]/div").screenshot({path:'C:\\JavaScript\\Playwrightwithjavascript\\Screenshots\\'+Date.now()+'\\Element.png'})


})



   