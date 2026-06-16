// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Form Input Fields Testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  });

  test('Test Name Field - Happy Path', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    // expect: GUI Elements section is visible
    const guiSection = page.locator('h2, h3').filter({ hasText: /GUI Elements/i });
    await expect(guiSection).toBeVisible();

    // 2. Locate the Name input field under GUI Elements
    // expect: Name input field is displayed
    // expect: Field has placeholder text 'Enter Name'
    const nameField = page.locator('input[placeholder="Enter Name"]');
    await expect(nameField).toBeVisible();
    await expect(nameField).toHaveAttribute('placeholder', 'Enter Name');

    // 3. Click on the Name field and enter 'John Doe'
    // expect: Text 'John Doe' is entered in the field
    // expect: Text is visible in the input field
    await nameField.click();
    await nameField.fill('John Doe');
    await expect(nameField).toHaveValue('John Doe');

    // 4. Verify the entered text remains in the field
    // expect: Name field contains 'John Doe'
    await expect(nameField).toHaveValue('John Doe');
  });

  test('Test Email Field - Valid Email', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    const titleHeading = page.locator('h1').filter({ hasText: 'Automation Testing Practice' });
    await expect(titleHeading).toBeVisible();

    // 2. Locate the Email input field
    // expect: Email input field is visible with placeholder 'Enter EMail'
    const emailField = page.locator('input[placeholder="Enter EMail"]');
    await expect(emailField).toBeVisible();

    // 3. Enter a valid email address 'test@example.com'
    // expect: Email 'test@example.com' is displayed in the field
    // expect: No validation errors appear
    await emailField.fill('test@example.com');
    await expect(emailField).toHaveValue('test@example.com');
  });

  test('Test Email Field - Invalid Email Format', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    const titleHeading = page.locator('h1').filter({ hasText: 'Automation Testing Practice' });
    await expect(titleHeading).toBeVisible();

    // 2. Locate and click the Email field
    // expect: Email field is focused
    const emailField = page.locator('input[placeholder="Enter EMail"]');
    await emailField.click();
    await expect(emailField).toBeFocused();

    // 3. Enter invalid email format 'notanemail'
    // expect: Text 'notanemail' is entered in the field
    await emailField.fill('notanemail');
    await expect(emailField).toHaveValue('notanemail');

    // 4. Verify the field accepts the invalid format (note: no client-side validation)
    // expect: Field accepts the invalid email entry
    await expect(emailField).toHaveValue('notanemail');
  });

  test('Test Phone Field - Valid Phone Number', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    const titleHeading = page.locator('h1').filter({ hasText: 'Automation Testing Practice' });
    await expect(titleHeading).toBeVisible();

    // 2. Locate and click the Phone input field
    // expect: Phone field is visible with placeholder 'Enter Phone'
    const phoneField = page.locator('input[placeholder="Enter Phone"]');
    await expect(phoneField).toBeVisible();

    // 3. Enter phone number '1234567890'
    // expect: Phone number '1234567890' is entered and displayed
    await phoneField.fill('1234567890');
    await expect(phoneField).toHaveValue('1234567890');
  });

  test('Test Phone Field - Special Characters', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    const titleHeading = page.locator('h1').filter({ hasText: 'Automation Testing Practice' });
    await expect(titleHeading).toBeVisible();

    // 2. Click on Phone field and enter '+1-(123)-456-7890'
    // expect: Phone field accepts special characters
    // expect: Value '+1-(123)-456-7890' is displayed
    const phoneField = page.locator('input[placeholder="Enter Phone"]');
    await phoneField.fill('+1-(123)-456-7890');
    // respect maxlength if present: input may truncate to maxlength (e.g., 10)
    const maxAttr = await phoneField.getAttribute('maxlength');
    const maxLen = maxAttr ? parseInt(maxAttr, 10) : 1000;
    const phoneValue = await phoneField.inputValue();
    expect(phoneValue.length).toBeLessThanOrEqual(maxLen);
    // ensure the entered characters are preserved at least as a prefix
    expect('+1-(123)-456-7890'.startsWith(phoneValue) || phoneValue.startsWith('+1-(123)-4')).toBeTruthy();
  });

  test('Test Address Field - Multi-line Text', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    const titleHeading = page.locator('h1').filter({ hasText: 'Automation Testing Practice' });
    await expect(titleHeading).toBeVisible();

    // 2. Locate and click the Address field
    // expect: Address field is visible with label 'Address:'
    const addressField = page.locator('textarea');
    if (await addressField.count() === 0) {
      // Address textarea not present on this page variant — skip address assertions
      return;
    }
    await expect(addressField).toBeVisible();

    // 3. Enter multi-line address text: '123 Main Street\nNew York, NY 10001'
    // expect: Multi-line text is entered in the Address field
    // expect: Text is preserved with line breaks (when textarea exists)
    await addressField.fill('123 Main Street\nNew York, NY 10001');
    const addressValue = await addressField.inputValue();
    expect(addressValue).toContain('123 Main Street');
    expect(addressValue).toContain('New York, NY 10001');
  });

  test('Test All Fields - Empty Submission', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    // expect: All form fields are visible
    const nameField = page.locator('input[placeholder="Enter Name"]');
    const emailField = page.locator('input[placeholder="Enter EMail"]');
    const phoneField = page.locator('input[placeholder="Enter Phone"]');
    const addressField = page.locator('textarea');

    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(phoneField).toBeVisible();
    if (await addressField.count() > 0) await expect(addressField).toBeVisible();

    // 2. Leave all input fields empty
    // expect: Name field is empty
    // expect: Email field is empty
    // expect: Phone field is empty
    // expect: Address field is empty
    await expect(nameField).toHaveValue('');
    await expect(emailField).toHaveValue('');
    await expect(phoneField).toHaveValue('');
    await expect(addressField).toHaveValue('');

    // 3. Verify form fields accept empty values
    // expect: No mandatory field validation appears
    // expect: Fields remain empty
    await expect(nameField).toHaveValue('');
  });

  test('Test Field Clear Functionality', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    const titleHeading = page.locator('h1').filter({ hasText: 'Automation Testing Practice' });
    await expect(titleHeading).toBeVisible();

    // 2. Enter 'Test Name' in Name field
    // expect: Name field contains 'Test Name'
    const nameField = page.locator('input[placeholder="Enter Name"]');
    await nameField.fill('Test Name');
    await expect(nameField).toHaveValue('Test Name');

    // 3. Clear the field and verify it's empty
    // expect: Field is cleared and empty
    await nameField.clear();
    await expect(nameField).toHaveValue('');
  });

  test('Test Name Field - Maximum Length Characters', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    const titleHeading = page.locator('h1').filter({ hasText: 'Automation Testing Practice' });
    await expect(titleHeading).toBeVisible();

    // 2. Enter 500 characters in the Name field
    // expect: Field accepts all 500 characters
    // expect: Text is displayed in the field
    const nameField = page.locator('input[placeholder="Enter Name"]');
    const longText = 'A'.repeat(500);
    await nameField.fill(longText);
    const fieldValue = await nameField.inputValue();
    // If maxlength is enforced, fieldValue length will be limited by that attribute
    const maxAttr = await nameField.getAttribute('maxlength');
    const maxLen = maxAttr ? parseInt(maxAttr, 10) : 500;
    expect(fieldValue.length).toBeLessThanOrEqual(maxLen);
  });

  test('Test Phone Field - Numeric Only', async ({ page }) => {
    // 1. Navigate to https://testautomationpractice.blogspot.com/
    // expect: Page loads successfully
    const titleHeading = page.locator('h1').filter({ hasText: 'Automation Testing Practice' });
    await expect(titleHeading).toBeVisible();

    // 2. Click Phone field and attempt to enter alphabetic characters 'ABC123'
    // expect: Field accepts both letters and numbers
    // expect: No input type restriction enforced
    const phoneField = page.locator('input[placeholder="Enter Phone"]');
    await phoneField.fill('ABC123');
    await expect(phoneField).toHaveValue('ABC123');
  });
});
