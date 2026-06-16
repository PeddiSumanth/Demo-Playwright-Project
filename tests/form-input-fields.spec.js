// spec: tests/TestAutomationPracticePlan.md
// seed: tests/seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Form Input Fields Testing', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the test automation practice website
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Wait for the form elements to be visible
    await page.waitForSelector('#name', { timeout: 5000 });
  });

  test('Test Name Input Field - Valid Input', async ({ page }) => {
    // 1. Click on the Name input field
    const nameField = page.locator('#name');
    await nameField.click();
    await expect(nameField).toBeFocused();

    // 2. Enter a valid name: 'John Doe'
    await nameField.fill('John Doe');
    await expect(nameField).toHaveValue('John Doe');

    // 3. Tab to the next field to trigger any blur validation
    await nameField.press('Tab');

    // 4. Verify no error messages are displayed and value is retained
    await expect(nameField).toHaveValue('John Doe');
    const errorMessages = page.locator('[role="alert"], .error, .validation-error').first();
    const isVisible = await errorMessages.isVisible().catch(() => false);
    expect(isVisible).toBeFalsy();
  });

  test('Test Name Input Field - Empty Submission', async ({ page }) => {
    // 1. Locate the Name field
    const nameField = page.locator('#name');
    await expect(nameField).toBeVisible();
    await expect(nameField).toHaveValue('');

    // 2. Leave the Name field empty and click the Submit button
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // 3. Verify form behavior (field should be empty after submission attempt)
    await expect(nameField).toHaveValue('');
  });

  test('Test Name Input Field - Special Characters', async ({ page }) => {
    // 1. Click on the Name field
    const nameField = page.locator('#name');
    await nameField.click();
    await expect(nameField).toBeFocused();

    // 2. Enter special characters: '@#$%^&*()'
    const specialChars = '@#$%^&*()';
    await nameField.fill(specialChars);

    // 3. Verify the characters are present in the field
    // Special characters may be accepted or rejected based on validation
    const fieldValue = await nameField.inputValue();
    expect(fieldValue).toContain('@');
  });

  test('Test Email Input Field - Valid Email', async ({ page }) => {
    // 1. Locate the Email field in the form
    const emailField = page.locator('#email');
    await expect(emailField).toBeVisible();
    await expect(emailField).toHaveValue('');

    // 2. Click on the Email field and enter: 'test@example.com'
    await emailField.click();
    await emailField.fill('test@example.com');
    await expect(emailField).toHaveValue('test@example.com');

    // 3. Tab away from the field to trigger validation
    await emailField.press('Tab');

    // 4. Verify no error message appears for valid email format
    const errorMessages = page.locator('[role="alert"], .error, .validation-error').first();
    const isVisible = await errorMessages.isVisible().catch(() => false);
    expect(isVisible).toBeFalsy();
  });

  test('Test Email Input Field - Invalid Email Format', async ({ page }) => {
    // 1. Click on the Email field and enter invalid email: 'invalidemail'
    const emailField = page.locator('#email');
    await emailField.click();
    await emailField.fill('invalidemail');
    await expect(emailField).toHaveValue('invalidemail');

    // 2. Tab away or interact with other element to trigger validation
    await emailField.press('Tab');

    // 3. The field should retain the value
    // Validation behavior depends on client-side implementation
    const fieldValue = await emailField.inputValue();
    expect(fieldValue).toBe('invalidemail');
  });

  test('Test Phone Input Field - Valid Phone Number', async ({ page }) => {
    // 1. Locate and click on the Phone field
    const phoneField = page.locator('#phone');
    await expect(phoneField).toBeVisible();
    await phoneField.click();
    await expect(phoneField).toBeFocused();

    // 2. Enter a phone number: '1234567890'
    await phoneField.fill('1234567890');
    await expect(phoneField).toHaveValue('1234567890');

    // 3. Tab away to trigger any validation
    await phoneField.press('Tab');

    // 4. Verify no validation errors appear
    const errorMessages = page.locator('[role="alert"], .error, .validation-error').first();
    const isVisible = await errorMessages.isVisible().catch(() => false);
    expect(isVisible).toBeFalsy();
  });

  test('Test Phone Input Field - Non-Numeric Input', async ({ page }) => {
    // 1. Click on the Phone field
    const phoneField = page.locator('#phone');
    await phoneField.click();
    await expect(phoneField).toBeFocused();

    // 2. Try to enter text: 'abcdefg'
    await phoneField.fill('abcdefg');

    // 3. Verify the behavior - field may accept or reject non-numeric input
    const fieldValue = await phoneField.inputValue();
    // Field accepts text - validation is server-side or client-side at submission
    expect(fieldValue).toBe('abcdefg');
  });

  test('Test Address Input Field - Valid Address', async ({ page }) => {
    // 1. Locate the Address field (textarea)
    const addressField = page.locator('#textarea');
    await expect(addressField).toBeVisible();
    await expect(addressField).toHaveValue('');

    // 2. Click on the Address field and enter: '123 Main St, City, State 12345'
    await addressField.click();
    const address = '123 Main St, City, State 12345';
    await addressField.fill(address);
    await expect(addressField).toHaveValue(address);

    // 3. Tab away to trigger validation
    await addressField.press('Tab');

    // 4. Verify the address is accepted without errors
    await expect(addressField).toHaveValue(address);
  });

  test('Test Address Field - Maximum Length', async ({ page }) => {
    // 1. Click on the Address field
    const addressField = page.locator('#textarea');
    await addressField.click();
    await expect(addressField).toBeFocused();

    // 2. Enter a very long address text (e.g., 500+ characters)
    const longText = 'A'.repeat(500);
    await addressField.fill(longText);

    // 3. Verify if the field has accepted the input
    const fieldValue = await addressField.inputValue();
    expect(fieldValue.length).toBeGreaterThan(0);
    // Most textareas accept long text unless maxlength is set
    expect(fieldValue.length).toBeGreaterThanOrEqual(500);
  });

  test('Test Form Fields - Clear and Re-enter Data', async ({ page }) => {
    // 1. Fill multiple form fields with data
    const nameField = page.locator('#name');
    const emailField = page.locator('#email');
    const phoneField = page.locator('#phone');

    await nameField.fill('John Doe');
    await emailField.fill('john@example.com');
    await phoneField.fill('1234567890');

    // Verify data is entered
    await expect(nameField).toHaveValue('John Doe');
    await expect(emailField).toHaveValue('john@example.com');
    await expect(phoneField).toHaveValue('1234567890');

    // 2. Clear the fields
    await nameField.clear();
    await emailField.clear();
    await phoneField.clear();

    // 3. Verify fields are cleared
    await expect(nameField).toHaveValue('');
    await expect(emailField).toHaveValue('');
    await expect(phoneField).toHaveValue('');

    // 4. Re-enter data with different values
    await nameField.fill('Jane Smith');
    await emailField.fill('jane@example.com');
    await phoneField.fill('9876543210');

    // Verify new data is entered
    await expect(nameField).toHaveValue('Jane Smith');
    await expect(emailField).toHaveValue('jane@example.com');
    await expect(phoneField).toHaveValue('9876543210');
  });
});
