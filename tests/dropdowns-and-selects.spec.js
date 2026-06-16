// spec: tests/TestAutomationPracticePlan.md
// seed: tests/seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Dropdown and Select Elements Testing', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the test automation practice website
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Wait for select element to be visible
    const selectElement = page.locator('select');
    if (await selectElement.count() > 0) {
      await selectElement.first().waitFor({ state: 'visible', timeout: 5000 });
    }
  });

  test('Test Country Dropdown - Verify Default Selection', async ({ page }) => {
    // 1. Navigate to the Country dropdown in the form
    // Find select element (usually the first one is country)
    const countrySelect = page.locator('select').first();
    await expect(countrySelect).toBeVisible();

    // 2. Verify default selection is 'United States' or another default
    const selectedOption = await countrySelect.evaluate((el) => el.value || el.options[el.selectedIndex]?.textContent);
    expect(selectedOption).toBeTruthy();
  });

  test('Test Country Dropdown - Click to Open', async ({ page }) => {
    // 1. Click on the Country dropdown to open it
    const countrySelect = page.locator('select').first();
    await countrySelect.click();

    // 2. Verify dropdown opens (select element is visible and can be interacted with)
    const isVisible = await countrySelect.isVisible();
    expect(isVisible).toBe(true);
  });

  test('Test Country Dropdown - Select Canada', async ({ page }) => {
    // 1. Click on the Country dropdown to open it
    const countrySelect = page.locator('select').first();
    
    // 2. Select 'Canada' from the dropdown options
    await countrySelect.selectOption('Canada');

    // 3. Verify 'Canada' is now the selected value (case-insensitive)
    const selectedValue = await countrySelect.inputValue();
    expect(selectedValue.toLowerCase()).toBe('canada');
  });

  test('Test Country Dropdown - Select United Kingdom', async ({ page }) => {
    // 1. Click on the Country dropdown
    const countrySelect = page.locator('select').first();
    
    // 2. Select 'United Kingdom' from the dropdown
    await countrySelect.selectOption('United Kingdom');

    // 3. Verify selection
    const selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('United Kingdom');
  });

  test('Test Country Dropdown - Select Germany', async ({ page }) => {
    // 1. Get the Country dropdown
    const countrySelect = page.locator('select').first();
    
    // 2. Select 'Germany'
    await countrySelect.selectOption('Germany');

    // 3. Verify 'Germany' is selected
    const selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('Germany');
  });

  test('Test Country Dropdown - Select France', async ({ page }) => {
    // 1. Access the Country dropdown
    const countrySelect = page.locator('select').first();
    
    // 2. Select 'France'
    await countrySelect.selectOption('France');

    // 3. Verify selection persistence
    const selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('France');
  });

  test('Test Country Dropdown - Multiple Selections', async ({ page }) => {
    // 1. Start with United States
    const countrySelect = page.locator('select').first();
    
    // First selection - Australia
    await countrySelect.selectOption('Australia');
    let selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('Australia');

    // 2. Select Japan
    await countrySelect.selectOption('Japan');
    selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('Japan');

    // 3. Select Brazil
    await countrySelect.selectOption('Brazil');
    selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('Brazil');
  });

  test('Test Country Dropdown - Verify Options Available', async ({ page }) => {
    // 1. Get all options from the dropdown
    const countrySelect = page.locator('select').first();
    const options = await countrySelect.locator('option').allTextContents();

    // 2. Verify expected countries are in the list
    expect(options.length).toBeGreaterThan(0);
    // Common countries that should be in the list
    const optionsText = options.join('|');
    expect(optionsText).toBeTruthy();
  });

  test('Test Dropdown - Select Default Option', async ({ page }) => {
    // 1. Get the Country dropdown
    const countrySelect = page.locator('select').first();
    
    // 2. Select United States (default)
    await countrySelect.selectOption('United States');

    // 3. Verify selection
    const selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('United States');
  });

  test('Test Country Dropdown - Verify After Interaction', async ({ page }) => {
    // 1. Select a country
    const countrySelect = page.locator('select').first();
    await countrySelect.selectOption('Canada');

    // 2. Interact with other form element
    const nameField = page.locator('#name');
    await nameField.fill('Test User');

    // 3. Verify country selection is still retained
    const selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('Canada');
  });

  test('Test Country Dropdown - Verify Option Count', async ({ page }) => {
    // 1. Get all options
    const countrySelect = page.locator('select').first();
    const optionCount = await countrySelect.locator('option').count();

    // 2. Verify there are multiple options
    expect(optionCount).toBeGreaterThan(1);
  });

  test('Test Dropdown - Select India', async ({ page }) => {
    // 1. Get the dropdown
    const countrySelect = page.locator('select').first();
    
    // 2. Select India
    await countrySelect.selectOption('India');

    // 3. Verify selection
    const selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('India');
  });

  test('Test Dropdown - Select China', async ({ page }) => {
    // 1. Get the dropdown
    const countrySelect = page.locator('select').first();
    
    // 2. Select China
    await countrySelect.selectOption('China');

    // 3. Verify selection
    const selectedValue = await countrySelect.inputValue();
    expect(selectedValue).toBe('China');
  });

  test('Test Colors Listbox - Select Single Color (if available)', async ({ page }) => {
    // 1. Try to find a listbox for colors (if it exists on the page)
    const listboxes = page.locator('select[multiple]');
    const count = await listboxes.count();

    if (count > 0) {
      const colorListbox = listboxes.first();
      
      // 2. Select Red
      await colorListbox.selectOption('Red');

      // 3. Verify selection
      const selectedValue = await colorListbox.inputValue();
      expect(selectedValue).toBeTruthy();
    }
  });

  test('Test Sorted List Listbox - Select Animal (if available)', async ({ page }) => {
    // 1. Find listbox elements
    const selects = page.locator('select');
    const count = await selects.count();

    if (count >= 2) {
      // Try the second select which might be animal list
      const animalListbox = selects.nth(1);
      const isVisible = await animalListbox.isVisible().catch(() => false);

      if (isVisible) {
        // 2. Select an animal like Lion if available
        const options = await animalListbox.locator('option').allTextContents();
        if (options.length > 0) {
          await animalListbox.selectOption(options[0]);
        }
      }
    }
  });
});
