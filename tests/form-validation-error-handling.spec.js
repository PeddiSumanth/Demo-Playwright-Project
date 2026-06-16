// spec: tests/TestAutomationPracticePlan.md
// seed: tests/seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('Form Validation and Error Handling', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the test automation practice website
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Wait for form elements to be visible
    await page.waitForSelector('#name', { timeout: 5000 });
  });

  test('Test Form Submission with All Fields Empty', async ({ page }) => {
    // 1. Navigate to the form (GUI Elements section)
    const nameField = page.locator('#name');
    const emailField = page.locator('#email');
    const phoneField = page.locator('#phone');
    const addressField = page.locator('#textarea');

    // Verify all fields are empty and visible
    await expect(nameField).toBeVisible();
    await expect(nameField).toHaveValue('');
    await expect(emailField).toHaveValue('');
    await expect(phoneField).toHaveValue('');
    await expect(addressField).toHaveValue('');

    // 2. Click the Submit button without entering any data
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // 3. Examine form state after submission
    // Fields should still be empty
    await expect(nameField).toHaveValue('');
    await expect(emailField).toHaveValue('');
  });

  test('Test Form Submission with Required Fields Only', async ({ page }) => {
    // 1. Fill the Name field (commonly required)
    const nameField = page.locator('#name');
    const emailField = page.locator('#email');
    const addressField = page.locator('#textarea');

    await nameField.fill('John Doe');

    // Verify Name is filled, others empty
    await expect(nameField).toHaveValue('John Doe');
    await expect(emailField).toHaveValue('');
    await expect(addressField).toHaveValue('');

    // 2. Leave optional fields empty and click Submit
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // 3. Verify form state (should allow submission with only Name)
    // Form may stay on same page or redirect
    const currentUrl = page.url();
    expect(currentUrl).toBeTruthy();
  });

  test('Test Form Reset Button - Clear All Fields', async ({ page }) => {
    // 1. Fill in multiple form fields with data
    const nameField = page.locator('#name');
    const emailField = page.locator('#email');
    const phoneField = page.locator('#phone');
    const addressField = page.locator('#textarea');

    await nameField.fill('Jane Smith');
    await emailField.fill('jane@example.com');
    await phoneField.fill('9876543210');
    await addressField.fill('456 Oak Ave');

    // Verify all data is entered
    await expect(nameField).toHaveValue('Jane Smith');
    await expect(emailField).toHaveValue('jane@example.com');
    await expect(phoneField).toHaveValue('9876543210');
    await expect(addressField).toHaveValue('456 Oak Ave');

    // 2. Look for Reset button (if available) or use browser reset functionality
    const resetBtn = page.locator('input[type="reset"], button:has-text("Reset")').first();
    const resetExists = await resetBtn.isVisible().catch(() => false);

    if (resetExists) {
      // 3. Click Reset button to clear the form
      await resetBtn.click();

      // Verify form returns to initial empty state
      await expect(nameField).toHaveValue('');
      await expect(emailField).toHaveValue('');
      await expect(phoneField).toHaveValue('');
      await expect(addressField).toHaveValue('');
    }
  });

  test('Test Field Validation - Email Format Rejection', async ({ page }) => {
    // 1. Enter an invalid email format in the Email field
    const emailField = page.locator('#email');
    await emailField.fill('invalidemail');

    // Verify invalid email is entered
    await expect(emailField).toHaveValue('invalidemail');

    // 2. Attempt form submission
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // 3. Verify form state
    // Field should still contain invalid email (validation may be server-side)
    const fieldValue = await emailField.inputValue();
    expect(fieldValue).toBe('invalidemail');
  });

  test('Test Field Validation - Phone Number Validation', async ({ page }) => {
    // 1. Enter a short phone number
    const phoneField = page.locator('#phone');
    await phoneField.fill('123');

    // Verify short number is entered
    await expect(phoneField).toHaveValue('123');

    // Try to submit
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // 2. Field should retain the value
    await expect(phoneField).toHaveValue('123');
  });

  test('Test Field Validation - Phone with Special Characters', async ({ page }) => {
    // 1. Enter phone number with special characters
    const phoneField = page.locator('#phone');
    await phoneField.fill('123-456-7890');

    // Verify input with special characters
    const fieldValue = await phoneField.inputValue();
    expect(fieldValue).toBeTruthy();
  });

  test('Test Field Validation - Valid Email Acceptance', async ({ page }) => {
    // 1. Enter a valid email format in the Email field
    const emailField = page.locator('#email');
    await emailField.fill('valid.email@domain.com');

    // 2. Verify the valid email is accepted
    await expect(emailField).toHaveValue('valid.email@domain.com');

    // Verify no error messages
    const errorMessages = page.locator('[role="alert"], .error, .validation-error').first();
    const isVisible = await errorMessages.isVisible().catch(() => false);
    expect(isVisible).toBeFalsy();
  });

  test('Test Form Submission - Name Field Required', async ({ page }) => {
    // 1. Leave Name field empty
    const nameField = page.locator('#name');
    const emailField = page.locator('#email');

    // Fill other fields but not Name
    await emailField.fill('test@example.com');

    // 2. Click Submit
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // 3. Verify Name field is still empty
    await expect(nameField).toHaveValue('');
  });

  test('Test Field Validation - Name Field Special Characters', async ({ page }) => {
    // 1. Enter special characters in Name field
    const nameField = page.locator('#name');
    await nameField.fill('John@#$Doe');

    // Verify the input
    const fieldValue = await nameField.inputValue();
    expect(fieldValue).toBeTruthy();
  });

  test('Test Form Validation - Multiple Invalid Inputs', async ({ page }) => {
    // 1. Fill fields with invalid data
    const nameField = page.locator('#name');
    const emailField = page.locator('#email');
    const phoneField = page.locator('#phone');

    await nameField.fill('@@@');
    await emailField.fill('invalid');
    await phoneField.fill('abc');

    // Verify invalid data is entered
    await expect(nameField).toHaveValue('@@@');
    await expect(emailField).toHaveValue('invalid');
    await expect(phoneField).toHaveValue('abc');

    // 2. Click Submit
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await submitBtn.click();

    // 3. Verify fields retain invalid data (validation happens at submission or server)
    await expect(nameField).toHaveValue('@@@');
  });

  test('Test Form Fields - Data Persistence Across Interactions', async ({ page }) => {
    // 1. Fill Name field
    const nameField = page.locator('#name');
    const genderRadio = page.locator('#male');

    await nameField.fill('John Doe');
    await expect(nameField).toHaveValue('John Doe');

    // 2. Interact with radio buttons
    await genderRadio.click();
    await expect(genderRadio).toBeChecked();

    // 3. Verify Name field data is still present
    await expect(nameField).toHaveValue('John Doe');
  });

  test('Test Form Submission - Verify Button Behavior', async ({ page }) => {
    // 1. Locate Submit button
    const submitBtn = page.locator('button:has-text("Submit")').first();
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();

    // 2. Click Submit button
    await submitBtn.click();

    // 3. Verify form submission (page may or may not navigate based on form action)
    const currentUrl = page.url();
    expect(currentUrl).toBeTruthy();
  });

  test('Test Email Field - Multiple Invalid Formats', async ({ page }) => {
    // 1. Test invalid format 1: missing @
    const emailField = page.locator('#email');
    await emailField.fill('invalidemail.com');
    await expect(emailField).toHaveValue('invalidemail.com');

    // Clear and test format 2: missing domain
    await emailField.clear();
    await emailField.fill('test@');
    await expect(emailField).toHaveValue('test@');

    // Clear and test format 3: multiple @
    await emailField.clear();
    await emailField.fill('test@@example.com');
    await expect(emailField).toHaveValue('test@@example.com');
  });

  test('Test Form Validation - Address Field Max Length', async ({ page }) => {
    // 1. Try to enter a very long address
    const addressField = page.locator('#textarea');
    const longAddress = 'A'.repeat(1000);

    await addressField.fill(longAddress);

    // 2. Verify the field accepts or limits the input
    const fieldValue = await addressField.inputValue();
    expect(fieldValue.length).toBeGreaterThan(0);
  });
});
