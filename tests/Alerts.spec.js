const{test,expect} = require('@playwright/test');

test.skip('Handle Alerts', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });

  await page.locator("//button[@id='alertBtn']").click();
  await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page  
})


  test.skip('Confirmation Alerts', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();
  });

  await page.locator("//button[@id='confirmBtn']").click();
  await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
  await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page  

    })

    test('Prompt Alerts', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    await dialog.accept('Sumanth');
  });

  await page.locator("//button[@id='promptBtn']").click();
  await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Sumanth! How are you today?');
  await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page  
    })
