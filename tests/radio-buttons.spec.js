// spec: tests/TestAutomationPracticePlan.md
// seed: tests/seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Radio Buttons Testing', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the test automation practice website
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Wait for the radio buttons to be visible
    await page.waitForSelector('#male, #female', { timeout: 5000 });
  });

  test('Test Gender Radio Buttons - Select Male', async ({ page }) => {
    // 1. Navigate to the form and locate the 'Gender' section with radio buttons
    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');
    await expect(maleRadio).toBeVisible();
    await expect(femaleRadio).toBeVisible();

    // Verify neither radio button is initially selected
    await expect(maleRadio).not.toBeChecked();
    await expect(femaleRadio).not.toBeChecked();

    // 2. Click on the 'Male' radio button
    await maleRadio.click();

    // 3. Verify the selection state
    await expect(maleRadio).toBeChecked();
    await expect(femaleRadio).not.toBeChecked();
  });

  test('Test Gender Radio Buttons - Select Female', async ({ page }) => {
    // 1. Navigate to the form Gender section
    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');
    await expect(maleRadio).toBeVisible();
    await expect(femaleRadio).toBeVisible();

    // 2. Click on the 'Female' radio button
    await femaleRadio.click();

    // 3. Verify selection state
    await expect(femaleRadio).toBeChecked();
    await expect(maleRadio).not.toBeChecked();
  });

  test('Test Gender Radio Buttons - Toggle Selection', async ({ page }) => {
    // 1. Click on the Male radio button
    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');
    
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();
    await expect(femaleRadio).not.toBeChecked();

    // 2. Click on the Female radio button
    await femaleRadio.click();
    await expect(femaleRadio).toBeChecked();
    await expect(maleRadio).not.toBeChecked();

    // 3. Click on Male again
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();
    await expect(femaleRadio).not.toBeChecked();
  });

  test('Test Gender Radio Buttons - Keyboard Navigation', async ({ page }) => {
    // 1. Tab to the Male radio button to focus it
    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');
    
    await maleRadio.focus();
    await expect(maleRadio).toBeFocused();

    // 2. Press the Down arrow key to navigate to Female
    await maleRadio.press('ArrowDown');

    // 3. After arrow navigation, Female should be selected
    // Note: Radio button behavior with arrow keys may vary
    // In most implementations, arrow keys move focus and may select
    await expect(femaleRadio).toBeChecked();
  });

  test('Test Gender Radio Buttons - Select Male - Verify Persistence', async ({ page }) => {
    // 1. Select Male radio button
    const maleRadio = page.locator('#male');
    const emailField = page.locator('#email');
    
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();

    // 2. Interact with other form element
    await emailField.fill('test@example.com');

    // 3. Verify Male remains selected
    await expect(maleRadio).toBeChecked();
  });

  test('Test Gender Radio Buttons - Cannot Select Multiple', async ({ page }) => {
    // 1. Click on Male
    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');
    
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();

    // 2. Click on Female (which should unselect Male)
    await femaleRadio.click();
    await expect(femaleRadio).toBeChecked();
    await expect(maleRadio).not.toBeChecked();

    // 3. Verify only Female is selected (radio buttons are mutually exclusive)
    expect(await maleRadio.isChecked()).toBe(false);
    expect(await femaleRadio.isChecked()).toBe(true);
  });

  test('Test Gender Radio Buttons - Click on Male Multiple Times', async ({ page }) => {
    // 1. Click on Male
    const maleRadio = page.locator('#male');
    
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();

    // 2. Click on Male again (should remain selected)
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();

    // 3. Verify Male is still selected
    await expect(maleRadio).toBeChecked();
  });

  test('Test Gender Radio Buttons - Verify Initial State', async ({ page }) => {
    // 1. On page load, verify initial state
    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');
    
    // Neither should be pre-selected on fresh page
    await expect(maleRadio).not.toBeChecked();
    await expect(femaleRadio).not.toBeChecked();
  });

  test('Test Gender Radio Buttons - Select Female and Verify Value', async ({ page }) => {
    // 1. Select Female radio button
    const femaleRadio = page.locator('#female');
    await femaleRadio.click();
    await expect(femaleRadio).toBeChecked();

    // 2. Verify the value attribute
    const valueAttr = await femaleRadio.getAttribute('value');
    expect(valueAttr).toBe('female');
  });

  test('Test Gender Radio Buttons - Select Male and Verify Value', async ({ page }) => {
    // 1. Select Male radio button
    const maleRadio = page.locator('#male');
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();

    // 2. Verify the value attribute
    const valueAttr = await maleRadio.getAttribute('value');
    expect(valueAttr).toBe('male');
  });
});
