const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://testautomationpractice.blogspot.com/');
  const items = await page.locator('#productTable_paginate a').allTextContents();
  console.log('pagination texts:', items);
  for (const txt of items) {
    if (!txt.trim()) continue;
    const link = page.locator('#productTable_paginate a', { hasText: txt });
    const count = await link.count();
    console.log('text', JSON.stringify(txt), 'count', count);
    if (count > 0) {
      await link.first().click();
      await page.waitForTimeout(1000);
      const rows = await page.locator('#productTable tbody tr');
      console.log('after click', JSON.stringify(txt), 'rows', await rows.count());
      if (await rows.count() > 0) {
        console.log('first row', await rows.nth(0).locator('td').allTextContents());
      }
    }
  }
  await browser.close();
})();
