# Comprehensive Test Plan for testautomationpractice.blogspot.com

## Application Overview

This test plan covers comprehensive testing of the Automation Testing Practice website (https://testautomationpractice.blogspot.com/), which provides a complete platform for testing various UI elements including form inputs, dropdowns, checkboxes, radio buttons, tables, alerts, drag-and-drop, date pickers, file uploads, and interactive components. The website is designed for learning Selenium, Cypress, and Playwright automation.

## Test Scenarios

### 1. Form Input Fields Testing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Test Name Input Field - Valid Input

**File:** `tests/form-inputs/test-name-field-valid.spec.ts`

**Steps:**
  1. Navigate to the website and scroll to the 'GUI Elements' section
    - expect: The page displays the form with all input fields visible
    - expect: The Name field is empty and ready for input
  2. Click on the Name input field
    - expect: The Name field receives focus and shows cursor
  3. Enter a valid name: 'John Doe'
    - expect: The text 'John Doe' appears in the Name field
    - expect: No error messages are displayed
  4. Tab to the next field to trigger any blur validation
    - expect: The Name field retains the entered value
    - expect: No validation errors appear

#### 1.2. Test Name Input Field - Empty Submission

**File:** `tests/form-inputs/test-name-field-empty.spec.ts`

**Steps:**
  1. Navigate to the website and locate the Name field
    - expect: The Name field is visible and empty
  2. Leave the Name field empty and click the Submit button
    - expect: Observe if validation message appears or if form allows submission
  3. If validation exists, verify the error message is displayed
    - expect: A validation message is shown (e.g., 'Name is required')

#### 1.3. Test Name Input Field - Special Characters

**File:** `tests/form-inputs/test-name-field-special-chars.spec.ts`

**Steps:**
  1. Navigate to the form section and click on the Name field
    - expect: The Name field is focused
  2. Enter special characters: '@#$%^&*()'
    - expect: The special characters are accepted in the field (or rejected based on validation)
  3. Verify if any validation prevents special characters
    - expect: Field accepts or rejects special characters based on validation rules

#### 1.4. Test Email Input Field - Valid Email

**File:** `tests/form-inputs/test-email-field-valid.spec.ts`

**Steps:**
  1. Locate the Email field in the form
    - expect: The Email field is visible and empty
  2. Click on the Email field and enter: 'test@example.com'
    - expect: The email address appears in the field
  3. Tab away from the field to trigger validation
    - expect: No error message appears for valid email format

#### 1.5. Test Email Input Field - Invalid Email Format

**File:** `tests/form-inputs/test-email-field-invalid.spec.ts`

**Steps:**
  1. Click on the Email field and enter invalid email: 'invalidemail'
    - expect: The text 'invalidemail' appears in the field
  2. Tab away or submit to trigger validation
    - expect: A validation error appears (if client-side validation exists)
    - expect: Error message indicates invalid email format

#### 1.6. Test Phone Input Field - Valid Phone Number

**File:** `tests/form-inputs/test-phone-field-valid.spec.ts`

**Steps:**
  1. Locate and click on the Phone field
    - expect: The Phone field is focused
  2. Enter a phone number: '1234567890'
    - expect: The phone number is displayed in the field
  3. Tab away to trigger any validation
    - expect: No validation errors appear

#### 1.7. Test Phone Input Field - Non-Numeric Input

**File:** `tests/form-inputs/test-phone-field-nonnumeric.spec.ts`

**Steps:**
  1. Click on the Phone field
    - expect: The Phone field is focused
  2. Try to enter text: 'abcdefg'
    - expect: Field accepts or rejects non-numeric input based on validation
  3. If field rejects non-numeric input, verify no text appears
    - expect: Field remains empty if validation prevents non-numeric input

#### 1.8. Test Address Input Field - Valid Address

**File:** `tests/form-inputs/test-address-field-valid.spec.ts`

**Steps:**
  1. Locate the Address field
    - expect: The Address field is visible and empty
  2. Click on the Address field and enter: '123 Main St, City, State 12345'
    - expect: The address text is displayed in the field
  3. Tab away to trigger validation
    - expect: The address is accepted without errors

#### 1.9. Test Address Field - Maximum Length

**File:** `tests/form-inputs/test-address-field-maxlength.spec.ts`

**Steps:**
  1. Click on the Address field
    - expect: The Address field is focused
  2. Enter a very long address text (e.g., 500+ characters)
    - expect: Field accepts input up to maximum allowed length
  3. Verify if the field has a maximum length restriction
    - expect: Input stops at max length if restriction exists, or all text is accepted

### 2. Radio Buttons Testing

**Seed:** `tests/seed.spec.ts`

#### 2.1. Test Gender Radio Buttons - Select Male

**File:** `tests/radio-buttons/test-gender-select-male.spec.ts`

**Steps:**
  1. Navigate to the form and locate the 'Gender' section with radio buttons
    - expect: Male and Female radio buttons are visible
    - expect: Neither radio button is initially selected
  2. Click on the 'Male' radio button
    - expect: The Male radio button becomes selected (filled circle)
    - expect: Female radio button remains unselected
  3. Verify the selection state is preserved
    - expect: Male remains selected after page interaction

#### 2.2. Test Gender Radio Buttons - Select Female

**File:** `tests/radio-buttons/test-gender-select-female.spec.ts`

**Steps:**
  1. Navigate to the form Gender section
    - expect: Both Male and Female radio buttons are visible
  2. Click on the 'Female' radio button
    - expect: The Female radio button becomes selected
    - expect: Male radio button becomes unselected
  3. Verify selection persistence
    - expect: Female remains selected after interaction

#### 2.3. Test Gender Radio Buttons - Toggle Selection

**File:** `tests/radio-buttons/test-gender-toggle-selection.spec.ts`

**Steps:**
  1. Click on the Male radio button
    - expect: Male is selected
  2. Click on the Female radio button
    - expect: Female becomes selected and Male becomes unselected
    - expect: Only one radio button can be selected at a time
  3. Click on Male again
    - expect: Male is selected again, Female is unselected

#### 2.4. Test Gender Radio Buttons - Keyboard Navigation

**File:** `tests/radio-buttons/test-gender-keyboard-navigation.spec.ts`

**Steps:**
  1. Tab to the Male radio button to focus it
    - expect: Male radio button receives focus
  2. Press the Down arrow or Right arrow key
    - expect: Focus moves to Female radio button (if accessible via arrow keys)
  3. Press Space to select the focused radio button
    - expect: The focused radio button becomes selected

### 3. Checkboxes Testing

**Seed:** `tests/seed.spec.ts`

#### 3.1. Test Days Checkboxes - Select Single Day

**File:** `tests/checkboxes/test-single-day-selection.spec.ts`

**Steps:**
  1. Navigate to the Days section with checkboxes for all weekdays
    - expect: All 7 checkboxes (Sunday-Saturday) are visible and unchecked
  2. Click on the 'Monday' checkbox
    - expect: Monday checkbox becomes checked (checkmark visible)
    - expect: Other checkboxes remain unchecked
  3. Verify the selection is retained
    - expect: Monday remains checked after other interactions

#### 3.2. Test Days Checkboxes - Select Multiple Days

**File:** `tests/checkboxes/test-multiple-days-selection.spec.ts`

**Steps:**
  1. Navigate to the Days checkboxes section
    - expect: All checkboxes are visible and unchecked
  2. Click on Monday, Wednesday, and Friday checkboxes
    - expect: Monday, Wednesday, and Friday checkboxes are checked
    - expect: Other days remain unchecked
  3. Verify multiple selections are allowed
    - expect: Multiple checkboxes can be selected simultaneously

#### 3.3. Test Days Checkboxes - Select All Days

**File:** `tests/checkboxes/test-select-all-days.spec.ts`

**Steps:**
  1. Navigate to the Days section
    - expect: All 7 day checkboxes are visible
  2. Click on each checkbox (Sunday through Saturday)
    - expect: Each checkbox becomes checked when clicked
  3. Verify all checkboxes are selected
    - expect: All 7 checkboxes show checkmarks

#### 3.4. Test Days Checkboxes - Deselect Checkbox

**File:** `tests/checkboxes/test-deselect-checkbox.spec.ts`

**Steps:**
  1. Click on Monday to select it
    - expect: Monday checkbox is checked
  2. Click on Monday again to deselect it
    - expect: Monday checkbox becomes unchecked
  3. Verify the checkbox can be toggled on and off
    - expect: Clicking again removes the checkmark

#### 3.5. Test Days Checkboxes - Keyboard Interaction

**File:** `tests/checkboxes/test-days-keyboard-interaction.spec.ts`

**Steps:**
  1. Tab to focus on a day checkbox (e.g., Tuesday)
    - expect: The checkbox receives focus indicator
  2. Press Space to toggle the checkbox
    - expect: The checkbox becomes checked when Space is pressed
  3. Press Space again
    - expect: The checkbox becomes unchecked

### 4. Dropdown and Select Elements Testing

**Seed:** `tests/seed.spec.ts`

#### 4.1. Test Country Dropdown - Default Selection

**File:** `tests/dropdowns/test-country-dropdown-default.spec.ts`

**Steps:**
  1. Navigate to the Country dropdown in the form
    - expect: The Country dropdown is visible
    - expect: Default selection is 'United States'
  2. Click on the dropdown to verify it opens
    - expect: Dropdown opens and displays all country options
  3. Verify the list includes: United States, Canada, United Kingdom, Germany, France, Australia, Japan, China, Brazil, India
    - expect: All expected countries are visible in the dropdown list

#### 4.2. Test Country Dropdown - Select Different Country

**File:** `tests/dropdowns/test-country-dropdown-select.spec.ts`

**Steps:**
  1. Click on the Country dropdown to open it
    - expect: The dropdown menu is displayed with all options
  2. Click on 'Canada' from the dropdown options
    - expect: The dropdown closes
    - expect: 'Canada' is now displayed as the selected value
  3. Open the dropdown again to verify the selection
    - expect: Canada is shown as the selected option

#### 4.3. Test Country Dropdown - Select Each Country

**File:** `tests/dropdowns/test-country-dropdown-all-options.spec.ts`

**Steps:**
  1. Test selection of each country: United States, Canada, United Kingdom, Germany, France, Australia, Japan, China, Brazil, India
    - expect: Each country can be selected from the dropdown
  2. Verify the dropdown displays the selected country
    - expect: The selected country is shown in the dropdown after selection
  3. Verify selection persistence
    - expect: The selection remains after interacting with other form elements

#### 4.4. Test Colors Multi-Select Listbox - Select Single Color

**File:** `tests/dropdowns/test-colors-single-selection.spec.ts`

**Steps:**
  1. Navigate to the Colors listbox
    - expect: The Colors listbox is visible showing options: Red, Blue, Green, Yellow, Red, White, Green
  2. Click on 'Blue' color option
    - expect: Blue is highlighted or selected
  3. Verify selection state
    - expect: Blue remains selected

#### 4.5. Test Colors Multi-Select Listbox - Select Multiple Colors

**File:** `tests/dropdowns/test-colors-multiple-selection.spec.ts`

**Steps:**
  1. Navigate to the Colors listbox
    - expect: The Colors listbox is visible
  2. Hold Ctrl and click on 'Red', then 'Blue', then 'Green'
    - expect: Multiple colors are selected (highlighted or checked)
  3. Verify multiple selections are retained
    - expect: All three selected colors remain highlighted

#### 4.6. Test Sorted List Listbox - Select Animal

**File:** `tests/dropdowns/test-sorted-list-selection.spec.ts`

**Steps:**
  1. Navigate to the Sorted List listbox
    - expect: The listbox displays animals in alphabetical order: Cat, Cheetah, Deer, Dog, Elephant, Fox, Giraffe, Lion, Rabbit, Zebra
  2. Click on 'Lion'
    - expect: Lion is selected or highlighted
  3. Verify selection
    - expect: Lion remains selected

#### 4.7. Test Sorted List Listbox - Verify Alphabetical Order

**File:** `tests/dropdowns/test-sorted-list-order.spec.ts`

**Steps:**
  1. Examine the Sorted List listbox
    - expect: The animals are listed in alphabetical order: Cat < Cheetah < Deer < Dog < Elephant < Fox < Giraffe < Lion < Rabbit < Zebra
  2. Verify the sorting is correct
    - expect: The list follows strict alphabetical sorting

### 5. Date Picker Testing

**Seed:** `tests/seed.spec.ts`

#### 5.1. Test Date Picker 1 - Valid Date Entry (mm/dd/yyyy)

**File:** `tests/date-pickers/test-datepicker1-valid-date.spec.ts`

**Steps:**
  1. Locate the Date Picker 1 field (mm/dd/yyyy format)
    - expect: The date input field is visible with placeholder for mm/dd/yyyy
  2. Click on the field and enter: '12/25/2024'
    - expect: The date appears in the field in mm/dd/yyyy format
  3. Tab away to trigger validation
    - expect: No validation errors appear

#### 5.2. Test Date Picker 1 - Invalid Date Format

**File:** `tests/date-pickers/test-datepicker1-invalid-format.spec.ts`

**Steps:**
  1. Click on Date Picker 1 field
    - expect: The field is focused
  2. Enter an invalid format: '2024-12-25'
    - expect: The field may reject the format or accept it based on validation
  3. Verify validation behavior
    - expect: If strict validation exists, an error message appears

#### 5.3. Test Date Picker 1 - Out of Range Date

**File:** `tests/date-pickers/test-datepicker1-out-of-range.spec.ts`

**Steps:**
  1. Click on Date Picker 1
    - expect: The field is focused
  2. Enter: '13/45/2024' (invalid month and day)
    - expect: Field may accept or reject invalid date values
  3. Check if validation prevents impossible dates
    - expect: Validation prevents invalid dates, or accepts them based on field behavior

#### 5.4. Test Date Picker 2 - Valid Date Entry (dd/mm/yyyy)

**File:** `tests/date-pickers/test-datepicker2-valid-date.spec.ts`

**Steps:**
  1. Locate Date Picker 2 field (dd/mm/yyyy format)
    - expect: The date input field is visible with dd/mm/yyyy format
  2. Click on the field and enter: '25/12/2024'
    - expect: The date appears in the field in dd/mm/yyyy format
  3. Tab away and verify no errors
    - expect: The date is accepted

#### 5.5. Test Date Picker 2 - Different Date Format From Picker 1

**File:** `tests/date-pickers/test-datepicker2-format-difference.spec.ts`

**Steps:**
  1. Enter a date in Picker 2 using dd/mm/yyyy: '15/06/2024'
    - expect: The date is accepted in dd/mm/yyyy format
  2. Try the same date in Picker 1 using mm/dd/yyyy: '15/06/2024'
    - expect: Date Picker 1 interprets this as June 15th instead of 15th of June
    - expect: Different formats are respected by each picker

#### 5.6. Test Date Picker 3 - Select Date Range

**File:** `tests/date-pickers/test-datepicker3-date-range.spec.ts`

**Steps:**
  1. Navigate to Date Picker 3 (Select a Date Range)
    - expect: Two date input fields are visible: Start Date and End Date
    - expect: A Submit button is present
  2. Click on the Start Date field and enter: '01/01/2024'
    - expect: The start date is entered in the field
  3. Click on the End Date field and enter: '12/31/2024'
    - expect: The end date is entered in the field
  4. Click the Submit button
    - expect: The form processes the date range
    - expect: No errors appear

#### 5.7. Test Date Picker 3 - End Date Before Start Date

**File:** `tests/date-pickers/test-datepicker3-invalid-range.spec.ts`

**Steps:**
  1. Enter Start Date: '12/31/2024' and End Date: '01/01/2024'
    - expect: Both dates are entered
  2. Click Submit button
    - expect: Validation may prevent submission or allow it based on field validation

#### 5.8. Test Date Picker 3 - Same Start and End Date

**File:** `tests/date-pickers/test-datepicker3-same-dates.spec.ts`

**Steps:**
  1. Enter the same date for both Start and End: '06/15/2024'
    - expect: Both fields accept the same date
  2. Click Submit
    - expect: The form accepts a single-day range

### 6. File Upload Testing

**Seed:** `tests/seed.spec.ts`

#### 6.1. Test Single File Upload - Valid File

**File:** `tests/file-upload/test-single-file-upload-valid.spec.ts`

**Steps:**
  1. Navigate to the 'Upload Files' section
    - expect: Section title 'Upload Files' is visible
    - expect: Two sets of upload options are visible
  2. Click on the first 'Choose File' button for single file upload
    - expect: A file picker dialog opens
  3. Select a valid file (e.g., test.txt or test.pdf) from your system
    - expect: The file is selected in the dialog
    - expect: File name appears in the upload field
  4. Click the 'Upload Single File' button
    - expect: The file is uploaded
    - expect: A success message may appear

#### 6.2. Test Single File Upload - Large File

**File:** `tests/file-upload/test-single-file-upload-large.spec.ts`

**Steps:**
  1. Click on 'Choose File' button for single upload
    - expect: File picker dialog opens
  2. Select a large file (>10MB)
    - expect: File is selected
  3. Click 'Upload Single File'
    - expect: File upload begins
    - expect: Success or error message appears based on server limits

#### 6.3. Test Single File Upload - Unsupported File Type

**File:** `tests/file-upload/test-single-file-upload-unsupported.spec.ts`

**Steps:**
  1. Click 'Choose File' for single upload
    - expect: File picker opens
  2. Select an unsupported file type if the form restricts them
    - expect: File is selected (may be restricted based on form validation)
  3. Click 'Upload Single File'
    - expect: Upload succeeds or error message appears based on server validation

#### 6.4. Test Multiple Files Upload - Valid Files

**File:** `tests/file-upload/test-multiple-files-upload-valid.spec.ts`

**Steps:**
  1. Navigate to 'Upload Files' section
    - expect: The multiple file upload section is visible
  2. Click on the second 'Choose File' button for multiple files
    - expect: File picker dialog opens
  3. Select multiple files (e.g., file1.txt, file2.txt, file3.pdf)
    - expect: All files are selected
    - expect: File names are displayed
  4. Click 'Upload Multiple Files' button
    - expect: All files are uploaded
    - expect: Success message appears

#### 6.5. Test Multiple Files Upload - Mixed File Types

**File:** `tests/file-upload/test-multiple-files-mixed-types.spec.ts`

**Steps:**
  1. Click on 'Choose File' for multiple upload
    - expect: File picker opens with multiple selection enabled
  2. Select various file types: .txt, .pdf, .csv, .doc
    - expect: All file types are selected
  3. Click 'Upload Multiple Files'
    - expect: All files are uploaded successfully

### 7. Table Testing

**Seed:** `tests/seed.spec.ts`

#### 7.1. Test Static Web Table - Verify Table Structure

**File:** `tests/tables/test-static-table-structure.spec.ts`

**Steps:**
  1. Navigate to the 'Static Web Table' section
    - expect: The table is visible with headers: BookName, Author, Subject, Price
  2. Count the number of rows in the table
    - expect: The table contains 6 data rows plus header row
    - expect: All rows have 4 columns
  3. Verify table headers are properly formatted
    - expect: Headers are bold or highlighted
    - expect: Headers are aligned correctly

#### 7.2. Test Static Web Table - Verify Data Content

**File:** `tests/tables/test-static-table-data.spec.ts`

**Steps:**
  1. Examine each row in the static table
    - expect: Row 1: Learn Selenium, Amit, Selenium, 300
    - expect: Row 2: Learn Java, Mukesh, Java, 500
    - expect: Row 3: Learn JS, Animesh, Javascript, 300
    - expect: Row 4: Master In Selenium, Mukesh, Selenium, 3000
    - expect: Row 5: Master In Java, Amod, JAVA, 2000
    - expect: Row 6: Master In JS, Amit, Javascript, 1000
  2. Verify prices are displayed correctly
    - expect: All prices are visible and properly formatted

#### 7.3. Test Static Web Table - Sort Functionality

**File:** `tests/tables/test-static-table-sorting.spec.ts`

**Steps:**
  1. Click on a table header (e.g., 'Price') if it's sortable
    - expect: Header may be clickable to sort (if functionality exists)
  2. Verify if rows are reordered based on the clicked column
    - expect: Rows are sorted by the selected column (ascending/descending) or no change if sorting not implemented

#### 7.4. Test Dynamic Web Table - Verify Table Display

**File:** `tests/tables/test-dynamic-table-display.spec.ts`

**Steps:**
  1. Navigate to the 'Dynamic Web Table' section
    - expect: The table is visible showing browser performance metrics
    - expect: Headers: Name, Network (Mbps), Disk (MB/s), CPU (%), Memory (MB)
  2. Verify data for all browsers: Chrome, Firefox, Internet Explorer, System
    - expect: Chrome: 0.7 Mbps, 0.75 MB/s, 2.5%, 85.2 MB
    - expect: Firefox: 3.9 Mbps, 0.63 MB/s, 7.5%, 89.3 MB
    - expect: Internet Explorer: 1.4 Mbps, 0.19 MB/s, 0.0%, 60.4 MB
    - expect: System: 9.3 Mbps, 0.87 MB/s, 7.9%, 89.8 MB

#### 7.5. Test Dynamic Web Table - Verify Data Extraction

**File:** `tests/tables/test-dynamic-table-extraction.spec.ts`

**Steps:**
  1. Extract CPU load of Chrome process from the table
    - expect: Extracted value is: 2.5%
  2. Extract Memory Size of Firefox process
    - expect: Extracted value is: 89.3 MB
  3. Extract Network speed of Chrome and Disk space of Firefox
    - expect: Chrome network: 0.7 Mbps
    - expect: Firefox disk: 0.63 MB/s

#### 7.6. Test Pagination Web Table - Verify Pagination Controls

**File:** `tests/tables/test-pagination-table-controls.spec.ts`

**Steps:**
  1. Navigate to 'Pagination Web Table' section
    - expect: A table is visible with products
    - expect: Pagination links are displayed at the bottom: 1, 2, 3, 4
  2. Verify the default page is page 1
    - expect: 5 products are displayed: Smartphone, Laptop, Tablet, Smartwatch, Wireless Earbuds

#### 7.7. Test Pagination Web Table - Navigate Between Pages

**File:** `tests/tables/test-pagination-table-navigation.spec.ts`

**Steps:**
  1. Click on page 2 link in the pagination
    - expect: Page 2 is displayed with different products
    - expect: Page 2 link is highlighted/active
  2. Click on page 3
    - expect: Page 3 products are displayed
  3. Click on page 1 to return
    - expect: Original products from page 1 are displayed

#### 7.8. Test Pagination Web Table - Select Products

**File:** `tests/tables/test-pagination-table-select-products.spec.ts`

**Steps:**
  1. On page 1, click checkboxes for Smartphone and Laptop
    - expect: Both checkboxes are checked
  2. Navigate to page 2
    - expect: Page 2 displays new products with unchecked checkboxes
  3. Return to page 1 to verify the previous selections
    - expect: Smartphone and Laptop checkboxes remain checked (or are cleared based on form behavior)

### 8. Alerts and Popups Testing

**Seed:** `tests/seed.spec.ts`

#### 8.1. Test Simple Alert Button

**File:** `tests/alerts/test-simple-alert.spec.ts`

**Steps:**
  1. Navigate to the 'Alerts & Popups' section in the right sidebar
    - expect: The section shows three alert buttons: Simple Alert, Confirmation Alert, Prompt Alert
  2. Click on the 'Simple Alert' button
    - expect: A browser alert dialog appears with a message
    - expect: The alert has an OK button
  3. Read the alert message
    - expect: The alert displays a specific message (e.g., 'Hello, I am an alert box!')
  4. Click the OK button to close the alert
    - expect: The alert closes and the page is still visible

#### 8.2. Test Confirmation Alert - Click OK

**File:** `tests/alerts/test-confirmation-alert-ok.spec.ts`

**Steps:**
  1. Click on the 'Confirmation Alert' button
    - expect: A confirmation dialog appears with OK and Cancel buttons
  2. Read the confirmation message
    - expect: Dialog displays a question (e.g., 'Press a button!', 'Are you sure?')
  3. Click the OK button
    - expect: Dialog closes
    - expect: A success message or result is displayed on the page

#### 8.3. Test Confirmation Alert - Click Cancel

**File:** `tests/alerts/test-confirmation-alert-cancel.spec.ts`

**Steps:**
  1. Click on the 'Confirmation Alert' button
    - expect: Confirmation dialog appears
  2. Click the Cancel button
    - expect: Dialog closes
    - expect: A different result message appears (different from OK action)

#### 8.4. Test Prompt Alert - Enter Text and OK

**File:** `tests/alerts/test-prompt-alert-ok.spec.ts`

**Steps:**
  1. Click on the 'Prompt Alert' button
    - expect: A prompt dialog appears with a text input field
    - expect: Dialog has OK and Cancel buttons
  2. Enter text in the prompt field: 'Test User'
    - expect: The text is entered in the input field
  3. Click OK button
    - expect: Dialog closes
    - expect: The entered text appears on the page (e.g., greeting message with the name)

#### 8.5. Test Prompt Alert - Leave Empty and OK

**File:** `tests/alerts/test-prompt-alert-empty-ok.spec.ts`

**Steps:**
  1. Click 'Prompt Alert' button
    - expect: Prompt dialog opens with empty text field
  2. Click OK without entering any text
    - expect: Dialog closes
    - expect: Result message appears (may show empty string or default message)

#### 8.6. Test Prompt Alert - Click Cancel

**File:** `tests/alerts/test-prompt-alert-cancel.spec.ts`

**Steps:**
  1. Click 'Prompt Alert' button
    - expect: Prompt dialog appears
  2. Enter some text and click Cancel
    - expect: Dialog closes without processing the input
    - expect: No message with entered text appears

### 9. Interactive Buttons and Links Testing

**Seed:** `tests/seed.spec.ts`

#### 9.1. Test Dynamic Button - START to LOADING

**File:** `tests/buttons/test-dynamic-button-start.spec.ts`

**Steps:**
  1. Navigate to the 'Dynamic Button' section in the right sidebar
    - expect: A button labeled 'START' is visible
  2. Click the START button
    - expect: Button text changes from 'START' to 'LOADING'
    - expect: Button may show loading indicator or different styling
  3. Wait a few seconds for the loading to complete
    - expect: Button text changes to show a different state (e.g., 'COMPLETED' or returns to 'START')

#### 9.2. Test New Tab Button

**File:** `tests/buttons/test-new-tab-button.spec.ts`

**Steps:**
  1. Locate the 'New Tab' button in the right sidebar
    - expect: The button is visible
  2. Click on 'New Tab' button
    - expect: A new browser tab or window opens
    - expect: The new tab contains specific content or page
  3. Verify the new tab content
    - expect: The new tab displays expected content
  4. Close the new tab and return to the main tab
    - expect: The main page is still intact

#### 9.3. Test Popup Windows Button

**File:** `tests/buttons/test-popup-windows-button.spec.ts`

**Steps:**
  1. Locate the 'Popup Windows' button
    - expect: The button is visible
  2. Click on 'Popup Windows' button
    - expect: A popup window or new window opens
  3. Examine the popup content
    - expect: The popup displays content (text, message, or form)
  4. Close the popup window
    - expect: The popup closes and main page is visible

#### 9.4. Test Submit Button in Date Range Section

**File:** `tests/buttons/test-submit-button-date-range.spec.ts`

**Steps:**
  1. Navigate to Date Picker 3 section
    - expect: Start Date, End Date fields and Submit button are visible
  2. Enter valid dates and click the Submit button
    - expect: Form submission occurs
    - expect: Success message or form processing is displayed

#### 9.5. Test Copy Text Button

**File:** `tests/buttons/test-copy-text-button.spec.ts`

**Steps:**
  1. Navigate to 'Double Click' section
    - expect: Field1 contains 'Hello World!'
    - expect: Field2 is empty
    - expect: 'Copy Text' button is visible
  2. Double click the 'Copy Text' button
    - expect: Text from Field1 is copied to Field2
    - expect: Field2 now displays 'Hello World!'

### 10. Links Testing

**Seed:** `tests/seed.spec.ts`

#### 10.1. Test Navigation Links - Home Link

**File:** `tests/links/test-home-link-navigation.spec.ts`

**Steps:**
  1. In the header, click on the 'Home' link
    - expect: The page navigates to the home URL
    - expect: The page title remains 'Automation Testing Practice'

#### 10.2. Test Header Navigation Links

**File:** `tests/links/test-header-navigation-links.spec.ts`

**Steps:**
  1. Click on each header link: Home, Udemy Courses, Online Trainings, Blog, PlaywrightPractice
    - expect: Home: Returns to testautomationpractice.blogspot.com
    - expect: Udemy Courses: Opens https://www.pavanonlinetrainings.com/#udemy
    - expect: Online Trainings: Opens https://www.pavanonlinetrainings.com/
    - expect: Blog: Opens https://www.pavantestingtools.com/
    - expect: PlaywrightPractice: Opens /p/playwrightpractice.html page

#### 10.3. Test Laptop Links Section

**File:** `tests/links/test-laptop-links.spec.ts`

**Steps:**
  1. Navigate to 'Labels And Links' section, 'Laptop Links' subsection
    - expect: Three links are visible: Apple, Lenovo, Dell
  2. Click on 'Apple' link
    - expect: Link opens Apple website (https://www.apple.com/)
  3. Go back and click on 'Lenovo' link
    - expect: Link opens Lenovo website (https://www.lenovo.com/)
  4. Go back and click on 'Dell' link
    - expect: Link opens Dell website (https://www.dell.com/)

#### 10.4. Test Broken Links - Error Code Links

**File:** `tests/links/test-broken-links-error-codes.spec.ts`

**Steps:**
  1. Navigate to 'Broken Links' section
    - expect: Multiple broken link options are visible: Errorcode 400, 401, 403, 404, 408, 500, 502, 503
  2. Click on 'Errorcode 404' link
    - expect: The link attempts to navigate to error page
    - expect: Browser shows 404 error or error response
  3. Test other error codes: 400, 401, 403, 408, 500, 502, 503
    - expect: Each link responds with corresponding error code

### 11. Mouse Hover and Interaction Testing

**Seed:** `tests/seed.spec.ts`

#### 11.1. Test Mouse Hover - Point Me Button

**File:** `tests/mouse-hover/test-mouse-hover-button.spec.ts`

**Steps:**
  1. Navigate to 'Mouse Hover' section
    - expect: Instruction text appears: 'Move the mouse over the button to open the dropdown menu.'
    - expect: 'Point Me' button is visible
  2. Move the mouse over the 'Point Me' button without clicking
    - expect: A dropdown menu appears when hovering over the button
  3. Examine the dropdown menu options
    - expect: The menu displays clickable options
  4. Move mouse away from the button
    - expect: The dropdown menu disappears

#### 11.2. Test Mouse Hover Dropdown - Select Option

**File:** `tests/mouse-hover/test-mouse-hover-dropdown-select.spec.ts`

**Steps:**
  1. Hover over the 'Point Me' button
    - expect: Dropdown menu appears
  2. Hover over and click on an option in the dropdown
    - expect: Option is selected
    - expect: Dropdown closes

### 12. Double Click Testing

**Seed:** `tests/seed.spec.ts`

#### 12.1. Test Double Click Copy Text Button

**File:** `tests/double-click/test-double-click-copy-text.spec.ts`

**Steps:**
  1. Navigate to 'Double Click' section
    - expect: Field1 contains: 'Hello World!'
    - expect: Field2 is empty
    - expect: 'Copy Text' button is visible
  2. Double click on the 'Copy Text' button
    - expect: Text from Field1 ('Hello World!') is copied to Field2
  3. Verify Field2 content
    - expect: Field2 now displays 'Hello World!'

#### 12.2. Test Double Click Copy Text - Verify Copy Behavior

**File:** `tests/double-click/test-double-click-copy-behavior.spec.ts`

**Steps:**
  1. Clear Field2 by clicking and deleting any content
    - expect: Field2 is empty
  2. Double click the Copy Text button again
    - expect: Text is copied again to Field2
  3. Change Field1 text to 'New Text' and double click button
    - expect: Field2 is updated with the new text from Field1

### 13. Drag and Drop Testing

**Seed:** `tests/seed.spec.ts`

#### 13.1. Test Drag and Drop - Drag Element to Target

**File:** `tests/drag-drop/test-drag-and-drop-basic.spec.ts`

**Steps:**
  1. Navigate to 'Drag and Drop' section
    - expect: A draggable element labeled 'Drag me to my target' is visible
    - expect: A drop zone labeled 'Drop here' is visible
  2. Click and drag the 'Drag me to my target' element to the 'Drop here' zone
    - expect: The element moves to the drop zone
    - expect: Drop zone shows visual feedback (e.g., highlight)
  3. Release the mouse to complete the drag-drop
    - expect: The element is placed in the drop zone
    - expect: Visual change confirms successful drop

#### 13.2. Test Drag and Drop - Verify Success Message

**File:** `tests/drag-drop/test-drag-and-drop-success.spec.ts`

**Steps:**
  1. Perform drag and drop operation successfully
    - expect: Element is dropped in the target zone
  2. Check if a success message appears
    - expect: A success message or confirmation appears (e.g., 'Dropped successfully!')

#### 13.3. Test Drag and Drop - Drag to Wrong Location

**File:** `tests/drag-drop/test-drag-and-drop-wrong-location.spec.ts`

**Steps:**
  1. Drag the element to an area outside the drop zone
    - expect: Element is not accepted in the wrong location
  2. Release the mouse
    - expect: Element reverts to original position or no success message appears

### 14. Slider/Price Range Testing

**Seed:** `tests/seed.spec.ts`

#### 14.1. Test Price Range Slider - Display Current Range

**File:** `tests/slider/test-slider-display-range.spec.ts`

**Steps:**
  1. Navigate to 'Slider' section
    - expect: A price range selector is visible
    - expect: Current range displays: '$75 - $300'
  2. Verify the price range display
    - expect: The range text shows minimum and maximum values

#### 14.2. Test Price Range Slider - Adjust Minimum Range

**File:** `tests/slider/test-slider-adjust-min.spec.ts`

**Steps:**
  1. Locate the slider control in the Price Range section
    - expect: A slider with two handles (min and max) is visible
  2. Drag the minimum (left) handle to a new position (e.g., $100)
    - expect: The minimum value changes
    - expect: Price range display updates (e.g., '$100 - $300')

#### 14.3. Test Price Range Slider - Adjust Maximum Range

**File:** `tests/slider/test-slider-adjust-max.spec.ts`

**Steps:**
  1. Locate the slider in the Price Range section
    - expect: Slider with both handles is visible
  2. Drag the maximum (right) handle to a new position (e.g., $250)
    - expect: The maximum value changes
    - expect: Price range display updates to reflect new maximum

#### 14.4. Test Price Range Slider - Invalid Range

**File:** `tests/slider/test-slider-invalid-range.spec.ts`

**Steps:**
  1. Attempt to drag the minimum handle beyond the maximum handle
    - expect: The slider prevents invalid ranges
    - expect: Handles stop at the boundary or swap positions
  2. Verify the range remains valid
    - expect: The displayed range never shows min > max

### 15. Navigation and Tabs Testing

**Seed:** `tests/seed.spec.ts`

#### 15.1. Test GUI Elements Link Navigation

**File:** `tests/navigation/test-gui-elements-link.spec.ts`

**Steps:**
  1. Click on the 'GUI Elements' heading link
    - expect: The link navigates to the form page
    - expect: URL changes to form page

#### 15.2. Test Wikipedia Link in Tabs Section

**File:** `tests/navigation/test-wikipedia-link.spec.ts`

**Steps:**
  1. Navigate to 'Tabs' section in the right sidebar
    - expect: A link with an image and a search textbox are visible
  2. Click on the Wikipedia link/image
    - expect: Wikipedia opens in a new tab or window
  3. Return to the main page
    - expect: The main page is still accessible

#### 15.3. Test Search Functionality in Tabs Section

**File:** `tests/navigation/test-tabs-search.spec.ts`

**Steps:**
  1. In the Tabs section, enter a search term in the textbox (e.g., 'Selenium')
    - expect: The search term is entered in the field
  2. Click the 'Submit' button next to the search box
    - expect: The search is submitted
    - expect: Results page or navigation occurs

### 16. Form Validation and Error Handling

**Seed:** `tests/seed.spec.ts`

#### 16.1. Test Form Submission with All Fields Empty

**File:** `tests/validation/test-form-submit-all-empty.spec.ts`

**Steps:**
  1. Navigate to the form (GUI Elements section)
    - expect: All fields are empty and visible
  2. Click the Submit button without entering any data
    - expect: Form submission is processed
    - expect: Validation errors may appear for required fields
  3. Examine any error messages
    - expect: Appropriate validation messages are displayed (if validation exists)

#### 16.2. Test Form Submission with Required Fields

**File:** `tests/validation/test-form-submit-required-fields.spec.ts`

**Steps:**
  1. Fill only the required fields (if designated)
    - expect: Required fields are completed
  2. Leave optional fields empty and click Submit
    - expect: Form submission succeeds with only required fields

#### 16.3. Test Form Reset Button

**File:** `tests/validation/test-form-reset.spec.ts`

**Steps:**
  1. Fill in multiple form fields with data
    - expect: All entered data is visible in the form
  2. Click a Reset button (if available) to clear the form
    - expect: All field values are cleared
    - expect: Form returns to initial empty state

#### 16.4. Test Field Validation - Email Format Rejection

**File:** `tests/validation/test-email-validation.spec.ts`

**Steps:**
  1. Enter an invalid email format in the Email field
    - expect: Field may accept or reject the invalid format
  2. Attempt form submission
    - expect: Validation prevents submission or error message appears

#### 16.5. Test Field Validation - Phone Number Validation

**File:** `tests/validation/test-phone-validation.spec.ts`

**Steps:**
  1. Enter an invalid phone number (too short, special characters)
    - expect: Validation may reject the input
  2. Enter a valid phone number and verify acceptance
    - expect: Valid phone number is accepted

### 17. Edge Cases and Boundary Testing

**Seed:** `tests/seed.spec.ts`

#### 17.1. Test Text Fields with Maximum Length

**File:** `tests/edge-cases/test-max-length-fields.spec.ts`

**Steps:**
  1. Click on Name field and attempt to enter a very long string
    - expect: Field accepts input up to maximum length (if limit exists)
  2. Verify no characters beyond max length are entered
    - expect: Input is limited to maximum length

#### 17.2. Test Form with Special Characters in Fields

**File:** `tests/edge-cases/test-special-characters-fields.spec.ts`

**Steps:**
  1. Enter special characters in Name field: '@#$%^&*()'
    - expect: Characters are accepted or rejected based on field validation
  2. Try special characters in Email field
    - expect: Email validation determines what's acceptable

#### 17.3. Test Form Fields with Unicode Characters

**File:** `tests/edge-cases/test-unicode-characters.spec.ts`

**Steps:**
  1. Enter Unicode characters (e.g., emoji, accents) in Name field: 'Jöhn Döe 😀'
    - expect: Field accepts or rejects Unicode input
  2. Submit form and verify handling
    - expect: Unicode is properly handled in submission or rejected

#### 17.4. Test Dropdown with No Selection

**File:** `tests/edge-cases/test-dropdown-no-selection.spec.ts`

**Steps:**
  1. Leave the Country dropdown on default selection
    - expect: Default is 'United States'
  2. Submit the form without changing the dropdown
    - expect: Form accepts the default selection

#### 17.5. Test Date Field with Boundary Dates

**File:** `tests/edge-cases/test-date-boundary-values.spec.ts`

**Steps:**
  1. Test with minimum date: 01/01/1900
    - expect: Field accepts or rejects the date
  2. Test with maximum date: 12/31/2099
    - expect: Field accepts or rejects the date
  3. Test with today's date
    - expect: Current date is accepted

#### 17.6. Test Multiple Rapid Clicks on Button

**File:** `tests/edge-cases/test-rapid-button-clicks.spec.ts`

**Steps:**
  1. Rapidly click the Submit button 5 times in quick succession
    - expect: Only one submission occurs or duplicates are prevented

#### 17.7. Test Drag and Drop Outside Viewport

**File:** `tests/edge-cases/test-drag-drop-outside-viewport.spec.ts`

**Steps:**
  1. Attempt to drag an element outside the visible viewport area
    - expect: Element stays within bounds or reverts to original position

#### 17.8. Test Table Pagination - Navigate Beyond Available Pages

**File:** `tests/edge-cases/test-pagination-boundaries.spec.ts`

**Steps:**
  1. Click on the last page in the pagination table
    - expect: The last page is displayed
  2. Verify no page exists beyond the last one
    - expect: No next page link or button is available on the last page
