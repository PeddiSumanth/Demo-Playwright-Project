const { test, expect } = require('@playwright/test');

function getDateParts(targetDateStr) {
    if (targetDateStr) {
        const [monthNum, dayNum, yearStr] = targetDateStr.split('/');
        return {
            monthNum: parseInt(monthNum, 10),
            dayNum: dayNum.padStart(2, '0'),
            yearStr
        };
    }

    const today = new Date();
    const monthNum = today.getMonth() + 1;
    const dayNum = today.getDate();
    const yearStr = String(today.getFullYear());

    return {
        monthNum,
        dayNum: String(dayNum).padStart(2, '0'),
        yearStr
    };
}

// Helper function to select a date
async function selectDate(page, targetDateStr) {
    const { monthNum, dayNum, yearStr } = getDateParts(targetDateStr);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const targetMonth = monthNames[monthNum - 1];
    const targetYear = yearStr;
    const targetDate = dayNum;

    await page.locator('input#datepicker').click();

    const calendar = page.locator('div.ui-datepicker');
    await expect(calendar).toBeVisible({ timeout: 5000 });

    const monthLocator = calendar.locator('.ui-datepicker-month');
    const yearLocator = calendar.locator('.ui-datepicker-year');
    await expect(monthLocator).toBeVisible({ timeout: 5000 });
    await expect(yearLocator).toBeVisible({ timeout: 5000 });

    const monthNamesMap = {
        January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
        July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
    };

    let iterations = 0;
    const maxIterations = 50;

    while (iterations < maxIterations) {
        const monthText = (await monthLocator.textContent())?.trim();
        const yearText = (await yearLocator.textContent())?.trim();

        if (monthText === targetMonth && yearText === targetYear) {
            break;
        }

        const currentYear = parseInt(yearText || '0', 10);
        const targetYearNum = parseInt(targetYear, 10);
        const currentMonthNum = monthNamesMap[monthText] || 0;

        const prevBtn = calendar.locator('.ui-datepicker-prev');
        const nextBtn = calendar.locator('.ui-datepicker-next');

        if (currentYear > targetYearNum || (currentYear === targetYearNum && currentMonthNum > monthNum)) {
            await prevBtn.click();
        } else {
            await nextBtn.click();
        }

        await expect(monthLocator).toBeVisible({ timeout: 5000 });
        iterations++;
    }

    const dateElement = calendar.locator(`a:has-text("${targetDate}")`).first();
    await expect(dateElement).toBeVisible({ timeout: 5000 });
    await dateElement.click();

    await expect(calendar).toBeHidden({ timeout: 5000 });
}

test('Handle Date Picker - Multiple Dates', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Run dynamically for today's date if no explicit date is needed.
    await selectDate(page);
});

