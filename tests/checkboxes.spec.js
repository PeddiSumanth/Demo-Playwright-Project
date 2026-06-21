// spec: tests/TestAutomationPracticePlan.md
// seed: tests/seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Checkboxes Testing', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the test automation practice website
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Wait for the checkbox elements to be visible
    await page.waitForSelector('#sunday, #monday', { timeout: 5000 });
  });

  test('Test Days Checkboxes - Select Single Day (Monday)', async ({ page }) => {
    // 1. Navigate to the Days section with checkboxes for all weekdays
    const sundayCheckbox = page.locator('#sunday');
    const mondayCheckbox = page.locator('#monday');
    const tuesdayCheckbox = page.locator('#tuesday');
    const wednesdayCheckbox = page.locator('#wednesday');
    const thursdayCheckbox = page.locator('#thursday');
    const fridayCheckbox = page.locator('#friday');
    const saturdayCheckbox = page.locator('#saturday');

    // Verify all checkboxes are visible and unchecked
    await expect(sundayCheckbox).toBeVisible();
    await expect(mondayCheckbox).toBeVisible();
    await expect(tuesdayCheckbox).toBeVisible();
    await expect(wednesdayCheckbox).toBeVisible();
    await expect(thursdayCheckbox).toBeVisible();
    await expect(fridayCheckbox).toBeVisible();
    await expect(saturdayCheckbox).toBeVisible();

    // Verify all are initially unchecked
    await expect(sundayCheckbox).not.toBeChecked();
    await expect(mondayCheckbox).not.toBeChecked();

    // 2. Click on the 'Monday' checkbox
    await mondayCheckbox.click();

    // 3. Verify the selection is retained
    await expect(mondayCheckbox).toBeChecked();
    await expect(sundayCheckbox).not.toBeChecked();
    await expect(tuesdayCheckbox).not.toBeChecked();
  });

  test('Test Days Checkboxes - Select Multiple Days', async ({ page }) => {
    // 1. Navigate to the Days checkboxes section
    const mondayCheckbox = page.locator('#monday');
    const wednesdayCheckbox = page.locator('#wednesday');
    const fridayCheckbox = page.locator('#friday');
    

    // Verify all checkboxes are visible and unchecked
    await expect(mondayCheckbox).not.toBeChecked();
    await expect(wednesdayCheckbox).not.toBeChecked();
    await expect(fridayCheckbox).not.toBeChecked();

    // 2. Click on Monday, Wednesday, and Friday checkboxes
    await mondayCheckbox.click();
    await wednesdayCheckbox.click();
    await fridayCheckbox.click();

    // 3. Verify multiple selections are allowed
    await expect(mondayCheckbox).toBeChecked();
    await expect(wednesdayCheckbox).toBeChecked();
    await expect(fridayCheckbox).toBeChecked();
    await expect(tuesdayCheckbox).not.toBeChecked();
  });

  test('Test Days Checkboxes - Select All Days', async ({ page }) => {
    // 1. Navigate to the Days section
    const sundayCheckbox = page.locator('#sunday');
    const mondayCheckbox = page.locator('#monday');
    const tuesdayCheckbox = page.locator('#tuesday');
    const wednesdayCheckbox = page.locator('#wednesday');
    const thursdayCheckbox = page.locator('#thursday');
    const fridayCheckbox = page.locator('#friday');
    const saturdayCheckbox = page.locator('#saturday');

    // 2. Click on each checkbox (Sunday through Saturday)
    await sundayCheckbox.click();
    await mondayCheckbox.click();
    await tuesdayCheckbox.click();
    await wednesdayCheckbox.click();
    await thursdayCheckbox.click();
    await fridayCheckbox.click();
    await saturdayCheckbox.click();

    // 3. Verify all checkboxes are selected
    await expect(sundayCheckbox).toBeChecked();
    await expect(mondayCheckbox).toBeChecked();
    await expect(tuesdayCheckbox).toBeChecked();
    await expect(wednesdayCheckbox).toBeChecked();
    await expect(thursdayCheckbox).toBeChecked();
    await expect(fridayCheckbox).toBeChecked();
    await expect(saturdayCheckbox).toBeChecked();
  });

  test('Test Days Checkboxes - Deselect Checkbox', async ({ page }) => {
    // 1. Click on Monday to select it
    const mondayCheckbox = page.locator('#monday');
    await mondayCheckbox.click();
    await expect(mondayCheckbox).toBeChecked();

    // 2. Click on Monday again to deselect it
    await mondayCheckbox.click();

    // 3. Verify the checkbox can be toggled on and off
    await expect(mondayCheckbox).not.toBeChecked();
  });

  test('Test Days Checkboxes - Keyboard Interaction', async ({ page }) => {
    // 1. Tab to focus on a day checkbox (e.g., Tuesday)
    const tuesdayCheckbox = page.locator('#tuesday');
    
    await tuesdayCheckbox.focus();
    await expect(tuesdayCheckbox).toBeFocused();

    // 2. Press Space to toggle the checkbox
    await tuesdayCheckbox.press('Space');
    await expect(tuesdayCheckbox).toBeChecked();

    // 3. Press Space again
    await tuesdayCheckbox.press('Space');
    await expect(tuesdayCheckbox).not.toBeChecked();
  });

  test('Test Days Checkboxes - Multiple Selection and Deselection', async ({ page }) => {
    // 1. Select Monday, Wednesday, Friday
    const mondayCheckbox = page.locator('#monday');
    const wednesdayCheckbox = page.locator('#wednesday');
    const fridayCheckbox = page.locator('#friday');
    const tuesdayCheckbox = page.locator('#tuesday');

    await mondayCheckbox.click();
    await wednesdayCheckbox.click();
    await fridayCheckbox.click();

    // Verify selection
    await expect(mondayCheckbox).toBeChecked();
    await expect(wednesdayCheckbox).toBeChecked();
    await expect(fridayCheckbox).toBeChecked();

    // 2. Deselect Wednesday
    await wednesdayCheckbox.click();

    // 3. Verify only Monday and Friday remain selected
    await expect(mondayCheckbox).toBeChecked();
    await expect(wednesdayCheckbox).not.toBeChecked();
    await expect(fridayCheckbox).toBeChecked();
    await expect(tuesdayCheckbox).not.toBeChecked();
  });

  test('Test Days Checkboxes - Verify Checkbox Values', async ({ page }) => {
    // 1. Get the value attribute of each checkbox
    const sundayValue = await page.locator('#sunday').getAttribute('value');
    const mondayValue = await page.locator('#monday').getAttribute('value');
    const tuesdayValue = await page.locator('#tuesday').getAttribute('value');

    // Verify values
    expect(sundayValue).toBe('sunday');
    expect(mondayValue).toBe('monday');
    expect(tuesdayValue).toBe('tuesday');
  });

  test('Test Days Checkboxes - Verify Checkbox IDs', async ({ page }) => {
    // 1. Verify each checkbox has correct ID
    const sundayCheckbox = page.locator('#sunday');
    const mondayCheckbox = page.locator('#monday');
    const fridayCheckbox = page.locator('#friday');

    await expect(sundayCheckbox).toBeVisible();
    await expect(mondayCheckbox).toBeVisible();
    await expect(fridayCheckbox).toBeVisible();
  });

  test('Test Days Checkboxes - Verify All Unchecked on Page Load', async ({ page }) => {
    // 1. Verify all checkboxes are unchecked on fresh page load
    const allCheckboxes = page.locator('input[type="checkbox"]');
    const count = await allCheckboxes.count();

    for (let i = 0; i < count; i++) {
      const checkbox = allCheckboxes.nth(i);
      const isVisible = await checkbox.isVisible().catch(() => false);
      const id = await checkbox.getAttribute('id');
      if (isVisible && id && (id.includes('day') || 
          ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].includes(id))) {
        await expect(checkbox).not.toBeChecked();
      }
    }
  });

  test('Test Days Checkboxes - Select Sunday and Other Days', async ({ page }) => {
    // 1. Click on Sunday checkbox
    const sundayCheckbox = page.locator('#sunday');
    const saturdayCheckbox = page.locator('#saturday');
    const mondayCheckbox = page.locator('#monday');

    await sundayCheckbox.click();
    await saturdayCheckbox.click();
    await mondayCheckbox.click();

    // 2. Verify all three are selected
    await expect(sundayCheckbox).toBeChecked();
    await expect(saturdayCheckbox).toBeChecked();
    await expect(mondayCheckbox).toBeChecked();

    // 3. Verify others are not selected
    const tuesdayCheckbox = page.locator('#tuesday');
    await expect(tuesdayCheckbox).not.toBeChecked();
  });
});
