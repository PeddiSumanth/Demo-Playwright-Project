const{test, expect} = require('@playwright/test');

test('Handle WebTable', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

          const table = await page.locator('#productTable')

          // Total number of rows and columns in the table
           const columns =await table.locator('thead tr th')
             console.log("Number of columns: " + await columns.count());
             expect(await columns.count()).toBe(4);

                const rows = await table.locator('tbody tr')
                console.log("Number of rows: " + await rows.count());
                expect(await rows.count()).toBe(5);


                //select a check box in the table
              // Select the checkbox in the row containing 'Laptop'
              //const matched = rows.filter({ hasText: 'Laptop' });
              //await matched.locator('input[type=\"checkbox\"]').check();

              await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page
              //select a check box in the table using function
                //await serchTable(rows, page, 'Laptop');
                //await serchTable(rows, page, 'Smartphone');
                //await serchTable(rows, page, 'Tablet');
                //await serchTable(rows, page, 'Smartwatch');

                //read data from the table using for loop
               /* for(let i=0; i< await rows.count(); i++)
                {
                    const row = rows.nth(i);
                    const tds = row.locator('td')

                    for(let j=0; j< await tds.count()-1; j++)
                    { 
                        const text = await tds.nth(j).textContent();
                        console.log(text);

                    }
                        } */













// Collect all data from all 4 pages by clicking each page number explicitly
const pagesToVisit = ['1', '2', '3', '4'];
for (const pageNum of pagesToVisit) {
    const pageLink = page.locator('ul.pagination#pagination a', { hasText: pageNum }).first();
    const linkCount = await page.locator('ul.pagination#pagination a', { hasText: pageNum }).count();
    if (linkCount > 0) {
        await pageLink.click();
        await page.waitForTimeout(1000); // Wait for table to update
    }

    const rows = await page.locator('#productTable tbody tr');
    const rowCount = await rows.count();
    console.log(`--- Page ${pageNum} --- Rows found: ${rowCount}`);
    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const tds = row.locator('td');
        let rowData = '';
        const tdCount = await tds.count();
        for (let j = 0; j < tdCount; j++) {
            rowData += (await tds.nth(j).textContent()) + ' | ';
        }
        console.log(rowData.trim());
    }
}

})

 async function serchTable(rows, page, name){

    const matched = rows.filter({ hasText: name });
    await matched.locator('input[type=\"checkbox\"]').check();

    await page.waitForTimeout(3000); // pause for 3 seconds to observe the actions performed on the page    


 }