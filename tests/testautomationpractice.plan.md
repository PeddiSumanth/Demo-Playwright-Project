# Test Automation Practice Website - Comprehensive Test Plan

## Application Overview

The Test Automation Practice website (https://testautomationpractice.blogspot.com/) is a comprehensive testing sandbox designed for Selenium, Cypress, and Playwright automation. The application contains multiple functional areas including form inputs, checkboxes, radio buttons, dropdowns, file uploads, static and dynamic tables, alerts, modal windows, drag-and-drop functionality, mouse interactions, sliders, and various UI elements. This test plan provides comprehensive coverage for all interactive elements and user scenarios.

## Test Scenarios

### 1. Form Input Fields Testing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Test Name Field - Happy Path

**File:** `tests/formInputs/testNameFieldHappyPath.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: GUI Elements section is visible
  2. Locate the Name input field under GUI Elements
    - expect: Name input field is displayed
    - expect: Field has placeholder text 'Enter Name'
  3. Click on the Name field and enter 'John Doe'
    - expect: Text 'John Doe' is entered in the field
    - expect: Text is visible in the input field
  4. Verify the entered text remains in the field
    - expect: Name field contains 'John Doe'

#### 1.2. Test Email Field - Valid Email

**File:** `tests/formInputs/testEmailFieldValid.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate the Email input field
    - expect: Email input field is visible with placeholder 'Enter EMail'
  3. Enter a valid email address 'test@example.com'
    - expect: Email 'test@example.com' is displayed in the field
    - expect: No validation errors appear

#### 1.3. Test Email Field - Invalid Email Format

**File:** `tests/formInputs/testEmailFieldInvalid.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate and click the Email field
    - expect: Email field is focused
  3. Enter invalid email format 'notanemail'
    - expect: Text 'notanemail' is entered in the field
  4. Verify the field accepts the invalid format (note: no client-side validation)
    - expect: Field accepts the invalid email entry

#### 1.4. Test Phone Field - Valid Phone Number

**File:** `tests/formInputs/testPhoneFieldValid.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate and click the Phone input field
    - expect: Phone field is visible with placeholder 'Enter Phone'
  3. Enter phone number '1234567890'
    - expect: Phone number '1234567890' is entered and displayed

#### 1.5. Test Phone Field - Special Characters

**File:** `tests/formInputs/testPhoneFieldSpecialChars.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click on Phone field and enter '+1-(123)-456-7890'
    - expect: Phone field accepts special characters
    - expect: Value '+1-(123)-456-7890' is displayed

#### 1.6. Test Address Field - Multi-line Text

**File:** `tests/formInputs/testAddressFieldMultiline.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate and click the Address field
    - expect: Address field is visible with label 'Address:'
  3. Enter multi-line address text: '123 Main Street\nNew York, NY 10001'
    - expect: Multi-line text is entered in the Address field
    - expect: Text is preserved with line breaks

#### 1.7. Test All Fields - Empty Submission

**File:** `tests/formInputs/testEmptyFieldSubmission.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: All form fields are visible
  2. Leave all input fields empty
    - expect: Name field is empty
    - expect: Email field is empty
    - expect: Phone field is empty
    - expect: Address field is empty
  3. Verify form fields accept empty values
    - expect: No mandatory field validation appears
    - expect: Fields remain empty

#### 1.8. Test Field Clear Functionality

**File:** `tests/formInputs/testFieldClear.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Enter 'Test Name' in Name field
    - expect: Name field contains 'Test Name'
  3. Clear the field and verify it's empty
    - expect: Field is cleared and empty

#### 1.9. Test Name Field - Maximum Length Characters

**File:** `tests/formInputs/testNameFieldMaxLength.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Enter 500 characters in the Name field
    - expect: Field accepts all 500 characters
    - expect: Text is displayed in the field

#### 1.10. Test Phone Field - Numeric Only

**File:** `tests/formInputs/testPhoneFieldNumeric.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click Phone field and attempt to enter alphabetic characters 'ABC123'
    - expect: Field accepts both letters and numbers
    - expect: No input type restriction enforced

### 2. Radio Buttons Testing

**Seed:** `tests/seed.spec.ts`

#### 2.1. Test Gender Selection - Male

**File:** `tests/radioButtons/testGenderMale.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: GUI Elements section is visible
  2. Locate Gender radio buttons under GUI Elements
    - expect: Two radio buttons visible: Male and Female
    - expect: Neither is selected by default
  3. Click on the Male radio button
    - expect: Male radio button is selected (marked/checked)
    - expect: Female radio button remains unselected

#### 2.2. Test Gender Selection - Female

**File:** `tests/radioButtons/testGenderFemale.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate the Gender radio buttons
    - expect: Male and Female radio buttons are available
  3. Click on the Female radio button
    - expect: Female radio button is selected
    - expect: Male radio button is deselected

#### 2.3. Test Gender Toggle - Male to Female

**File:** `tests/radioButtons/testGenderToggle.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click Male radio button
    - expect: Male is selected
  3. Click Female radio button
    - expect: Male becomes deselected
    - expect: Female becomes selected
  4. Click Male radio button again
    - expect: Female becomes deselected
    - expect: Male becomes selected

#### 2.4. Test Gender - No Selection State

**File:** `tests/radioButtons/testGenderNoSelection.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Gender radio buttons are visible
  2. Verify initial state of Gender radio buttons
    - expect: Neither Male nor Female is selected initially

### 3. Checkbox Testing

**Seed:** `tests/seed.spec.ts`

#### 3.1. Test Checkbox - Single Day Selection

**File:** `tests/checkboxes/testSingleDaySelection.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: GUI Elements section is visible
  2. Locate Days checkboxes (Sunday through Saturday)
    - expect: Seven checkboxes are visible for each day of the week
    - expect: None are checked by default
  3. Click on Monday checkbox
    - expect: Monday checkbox is checked
    - expect: Other day checkboxes remain unchecked

#### 3.2. Test Checkbox - Multiple Days Selection

**File:** `tests/checkboxes/testMultipleDaysSelection.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click on Monday, Wednesday, and Friday checkboxes
    - expect: Monday checkbox is checked
    - expect: Wednesday checkbox is checked
    - expect: Friday checkbox is checked
  3. Verify other days remain unchecked
    - expect: Sunday, Tuesday, Thursday, Saturday are all unchecked

#### 3.3. Test Checkbox - All Days Selection

**File:** `tests/checkboxes/testAllDaysSelection.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click on all seven day checkboxes (Sunday through Saturday)
    - expect: All seven checkboxes are checked
  3. Verify all checkboxes remain checked
    - expect: All days of the week are selected

#### 3.4. Test Checkbox - Uncheck Single Item

**File:** `tests/checkboxes/testUncheckSingleItem.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Select Monday and Tuesday checkboxes
    - expect: Monday is checked
    - expect: Tuesday is checked
  3. Click on Tuesday checkbox to uncheck it
    - expect: Monday remains checked
    - expect: Tuesday is unchecked

#### 3.5. Test Checkbox - Uncheck All Items

**File:** `tests/checkboxes/testUncheckAllItems.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Select all seven day checkboxes
    - expect: All checkboxes are checked
  3. Uncheck each checkbox one by one
    - expect: Each checkbox becomes unchecked after clicking
  4. Verify all checkboxes are unchecked
    - expect: All day checkboxes are unchecked

#### 3.6. Test Checkbox - State Persistence

**File:** `tests/checkboxes/testCheckboxStatePersistence.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Select Wednesday and Friday checkboxes
    - expect: Wednesday is checked
    - expect: Friday is checked
  3. Scroll down and then scroll back up to the checkboxes
    - expect: Wednesday and Friday checkboxes remain checked

### 4. Dropdown and Select Elements Testing

**Seed:** `tests/seed.spec.ts`

#### 4.1. Test Country Dropdown - Default Selection

**File:** `tests/dropdowns/testCountryDropdownDefault.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: GUI Elements section is visible
  2. Locate the Country dropdown
    - expect: Country dropdown is visible
    - expect: Default value 'United States' is selected

#### 4.2. Test Country Dropdown - Select Different Country

**File:** `tests/dropdowns/testCountryDropdownSelect.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click on the Country dropdown to open it
    - expect: Dropdown opens and displays all country options
  3. Select 'Canada' from the dropdown
    - expect: Dropdown closes and 'Canada' is displayed as selected

#### 4.3. Test Country Dropdown - All Options Verification

**File:** `tests/dropdowns/testCountryDropdownAllOptions.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click on Country dropdown to expand it
    - expect: Dropdown is open and displays all options
  3. Verify all 10 country options are present: United States, Canada, United Kingdom, Germany, France, Australia, Japan, China, Brazil, India
    - expect: All country options are visible in the dropdown

#### 4.4. Test Country Dropdown - Change Selection Multiple Times

**File:** `tests/dropdowns/testCountryDropdownChangeMultiple.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Select 'India' from Country dropdown
    - expect: India is selected
  3. Click dropdown again and select 'Australia'
    - expect: Australia is now selected
  4. Change to 'Japan'
    - expect: Japan is now selected
    - expect: Previous selection is deselected

#### 4.5. Test Colors Listbox - Single Selection

**File:** `tests/dropdowns/testColorsListboxSingle.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Colors listbox is visible
  2. Locate Colors multi-select listbox
    - expect: Listbox displays color options: Red, Blue, Green, Yellow, Red, White, Green
  3. Click on 'Blue' option
    - expect: Blue is selected in the listbox

#### 4.6. Test Colors Listbox - Multiple Selection

**File:** `tests/dropdowns/testColorsListboxMultiple.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click on Red color option
    - expect: Red is selected
  3. Hold Ctrl and click on Green color option
    - expect: Red remains selected
    - expect: Green is also selected
  4. Hold Ctrl and click on Yellow
    - expect: Red, Green, and Yellow are all selected

#### 4.7. Test Sorted List - Single Selection

**File:** `tests/dropdowns/testSortedListSingle.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Sorted List listbox is visible
  2. Locate Sorted List containing animals: Cat, Cheetah, Deer, Dog, Elephant, Fox, Giraffe, Lion, Rabbit, Zebra
    - expect: All 10 animal options are displayed in sorted order
  3. Click on 'Lion'
    - expect: Lion is selected in the listbox

#### 4.8. Test Sorted List - Multiple Selection

**File:** `tests/dropdowns/testSortedListMultiple.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Select 'Cat', 'Dog', and 'Elephant' using Ctrl+Click
    - expect: Cat is selected
    - expect: Dog is selected
    - expect: Elephant is selected
  3. Verify multiple items remain selected
    - expect: All three animals remain selected

### 5. Date Picker Testing

**Seed:** `tests/seed.spec.ts`

#### 5.1. Test Date Picker 1 - MM/DD/YYYY Format

**File:** `tests/datepickers/testDatePicker1Format.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Date Picker 1 (mm/dd/yyyy) is visible
  2. Locate Date Picker 1 input field
    - expect: Date input field for mm/dd/yyyy format is available
  3. Enter date '12/25/2025' in Date Picker 1
    - expect: Date '12/25/2025' is entered and displayed in the correct format

#### 5.2. Test Date Picker 2 - DD/MM/YYYY Format

**File:** `tests/datepickers/testDatePicker2Format.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Date Picker 2 (dd/mm/yyyy) is visible
  2. Click on Date Picker 2 input field
    - expect: Date Picker 2 field is focused
  3. Enter date '15/06/2025' in DD/MM/YYYY format
    - expect: Date '15/06/2025' is entered in the correct format

#### 5.3. Test Date Picker 3 - Date Range Selection

**File:** `tests/datepickers/testDatePicker3Range.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Date Picker 3 (Date Range) section is visible
  2. Locate Start Date and End Date input fields
    - expect: Start Date field with placeholder 'Start Date' is visible
    - expect: End Date field with placeholder 'End Date' is visible
  3. Click on Start Date field and enter start date
    - expect: Start Date field accepts the date input
  4. Click on End Date field and enter end date after start date
    - expect: End Date field accepts the date input
    - expect: End date is after start date

#### 5.4. Test Date Picker 3 - Submit Button

**File:** `tests/datepickers/testDatePicker3Submit.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Date Range section is visible
  2. Enter Start Date and End Date values
    - expect: Both date fields are filled
  3. Locate and click the Submit button in Date Picker 3 section
    - expect: Submit button is clickable and visible

#### 5.5. Test Date Picker - Invalid Format

**File:** `tests/datepickers/testDatePickerInvalidFormat.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Enter invalid date format 'invalid' in Date Picker 1
    - expect: Field accepts the invalid input (no client-side validation)

#### 5.6. Test Date Picker - Empty Value

**File:** `tests/datepickers/testDatePickerEmpty.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Leave Date Picker fields empty
    - expect: Date fields accept empty values
  3. Click Submit button
    - expect: Submit button is clickable with empty date values

### 6. File Upload Testing

**Seed:** `tests/seed.spec.ts`

#### 6.1. Test Single File Upload

**File:** `tests/fileUploads/testSingleFileUpload.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Upload Files section is visible
  2. Locate Single File Upload section with 'Choose File' button
    - expect: Choose File button is visible
    - expect: Upload Single File button is visible
  3. Click 'Choose File' button and select a test file (e.g., test.txt)
    - expect: File picker dialog opens
    - expect: File can be selected
  4. Click 'Upload Single File' button
    - expect: Upload button is clickable

#### 6.2. Test Multiple Files Upload

**File:** `tests/fileUploads/testMultipleFilesUpload.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Upload Files section is visible
  2. Locate Multiple Files Upload section
    - expect: Choose File button for multiple uploads is visible
    - expect: Upload Multiple Files button is visible
  3. Click 'Choose File' button and select multiple files
    - expect: File picker supports multiple file selection
  4. Click 'Upload Multiple Files' button
    - expect: Upload button is clickable

#### 6.3. Test File Upload - No File Selected

**File:** `tests/fileUploads/testFileUploadNoFile.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Do not select any file and click 'Upload Single File' button
    - expect: Upload button can be clicked
    - expect: No file is uploaded

### 7. Static Table Testing

**Seed:** `tests/seed.spec.ts`

#### 7.1. Test Static Table - Structure Verification

**File:** `tests/staticTable/testTableStructure.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Static Web Table section is visible
  2. Locate Static Web Table
    - expect: Table with 4 columns is displayed: BookName, Author, Subject, Price
  3. Verify all columns are present
    - expect: BookName column is present
    - expect: Author column is present
    - expect: Subject column is present
    - expect: Price column is present

#### 7.2. Test Static Table - Data Verification

**File:** `tests/staticTable/testTableData.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Verify first row contains: 'Learn Selenium', 'Amit', 'Selenium', '300'
    - expect: Row 1 data matches expected values
  3. Verify second row: 'Learn Java', 'Mukesh', 'Java', '500'
    - expect: Row 2 data matches expected values
  4. Verify third row: 'Learn JS', 'Animesh', 'Javascript', '300'
    - expect: Row 3 data matches expected values
  5. Verify row count is 6 data rows
    - expect: All 6 book entries are present in the table

#### 7.3. Test Static Table - Specific Cell Content

**File:** `tests/staticTable/testTableCellContent.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate cell containing 'Master In Selenium'
    - expect: Cell with 'Master In Selenium' is found in BookName column
  3. Verify the corresponding Author is 'Mukesh'
    - expect: Author for 'Master In Selenium' is 'Mukesh'
  4. Verify the corresponding Price is '3000'
    - expect: Price for 'Master In Selenium' is '3000'

#### 7.4. Test Static Table - Price Filtering Logic

**File:** `tests/staticTable/testTablePriceFiltering.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Static table is visible
  2. Identify all rows with price 300
    - expect: Two books have price 300: 'Learn Selenium' and 'Learn JS'
  3. Verify books with price over 1000
    - expect: 'Master In Selenium' (3000) and 'Master In Java' (2000) and 'Master In JS' (1000) are identified

### 8. Dynamic Table Testing

**Seed:** `tests/seed.spec.ts`

#### 8.1. Test Dynamic Table - Structure Verification

**File:** `tests/dynamicTable/testDynamicTableStructure.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Dynamic Web Table section is visible
  2. Locate Dynamic Web Table
    - expect: Table with 5 columns is displayed: Name, CPU (%), Disk (MB/s), Network (Mbps), Memory (MB)
  3. Verify all column headers are present
    - expect: All 5 column headers are visible and correctly labeled

#### 8.2. Test Dynamic Table - Data Verification

**File:** `tests/dynamicTable/testDynamicTableData.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Verify first row contains: 'Internet Explorer', '2.5%', '0.34 MB/s', '2.9 Mbps', '85.9 MB'
    - expect: Internet Explorer row data is correct
  3. Verify second row: 'System', '6.9%', '0.43 MB/s', '4.8 Mbps', '94.7 MB'
    - expect: System row data is correct
  4. Verify third row: 'Chrome', '8.9%', '0.15 MB/s', '2.3 Mbps', '98.0 MB'
    - expect: Chrome row data is correct
  5. Verify fourth row: 'Firefox', '3.6%', '0.85 MB/s', '9.8 Mbps', '84.1 MB'
    - expect: Firefox row data is correct

#### 8.3. Test Dynamic Table - Summary Information

**File:** `tests/dynamicTable/testDynamicTableSummary.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Dynamic table is visible
  2. Locate summary information below the table
    - expect: Summary section displays computed values from table data
  3. Verify 'CPU load of Chrome process: 8.9%'
    - expect: Chrome CPU percentage is correctly displayed
  4. Verify 'Memory Size of Firefox process: 84.1 MB'
    - expect: Firefox memory is correctly displayed
  5. Verify 'Network speed of Chrome process: 2.3 Mbps'
    - expect: Chrome network speed is correctly displayed
  6. Verify 'Disk space of Firefox process: 0.85 MB/s'
    - expect: Firefox disk space is correctly displayed

### 9. Pagination Table Testing

**Seed:** `tests/seed.spec.ts`

#### 9.1. Test Pagination Table - Structure Verification

**File:** `tests/paginationTable/testPaginationTableStructure.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Pagination Web Table section is visible
  2. Locate pagination table
    - expect: Table with columns: ID, Name, Price, Select is visible
    - expect: Pagination links (1, 2, 3, 4) are displayed below the table

#### 9.2. Test Pagination Table - First Page Data

**File:** `tests/paginationTable/testPaginationFirstPage.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Verify first page displays 5 products: Smartphone, Laptop, Tablet, Smartwatch, Wireless Earbuds
    - expect: All 5 products are visible on page 1
  3. Verify each product has ID, Name, Price, and Checkbox
    - expect: Row 1: ID=1, Name=Smartphone, Price=$10.99
    - expect: Row 2: ID=2, Name=Laptop, Price=$19.99
    - expect: Row 3: ID=3, Name=Tablet, Price=$5.99
    - expect: Row 4: ID=4, Name=Smartwatch, Price=$7.99
    - expect: Row 5: ID=5, Name=Wireless Earbuds, Price=$8.99

#### 9.3. Test Pagination Table - Checkbox Functionality

**File:** `tests/paginationTable/testPaginationCheckbox.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate Select checkboxes for each product
    - expect: 5 checkboxes are present, one for each product
    - expect: All checkboxes are unchecked initially
  3. Click checkbox for Smartphone (ID=1)
    - expect: Checkbox for Smartphone is checked
  4. Click checkbox for Laptop (ID=2)
    - expect: Checkboxes for both Smartphone and Laptop are checked

#### 9.4. Test Pagination Links - Navigation

**File:** `tests/paginationTable/testPaginationNavigation.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Page 1 of pagination table is displayed
  2. Click on pagination link '2'
    - expect: Page 2 is loaded
    - expect: Next set of 5 products is displayed
  3. Click on pagination link '3'
    - expect: Page 3 is loaded
  4. Click on pagination link '1'
    - expect: Page 1 is reloaded
    - expect: Original products are displayed

### 10. Alerts and Popups Testing

**Seed:** `tests/seed.spec.ts`

#### 10.1. Test Simple Alert

**File:** `tests/alertsPopups/testSimpleAlert.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Alerts & Popups section is visible in the right sidebar
  2. Locate 'Simple Alert' button
    - expect: Simple Alert button is visible and clickable
  3. Click 'Simple Alert' button
    - expect: JavaScript alert dialog appears
    - expect: Alert contains a message
  4. Click OK button on the alert
    - expect: Alert dialog closes
    - expect: Page returns to normal state

#### 10.2. Test Confirmation Alert - Accept

**File:** `tests/alertsPopups/testConfirmationAlertAccept.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click 'Confirmation Alert' button
    - expect: Confirmation dialog appears with OK and Cancel buttons
  3. Click OK button
    - expect: Dialog closes
    - expect: Success action is performed

#### 10.3. Test Confirmation Alert - Cancel

**File:** `tests/alertsPopups/testConfirmationAlertCancel.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click 'Confirmation Alert' button
    - expect: Confirmation dialog appears
  3. Click Cancel button
    - expect: Dialog closes
    - expect: Action is cancelled

#### 10.4. Test Prompt Alert - Enter Text

**File:** `tests/alertsPopups/testPromptAlertEnterText.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click 'Prompt Alert' button
    - expect: Prompt dialog appears with text input field
  3. Enter text 'Test Input' in the prompt field
    - expect: Text 'Test Input' is entered in the prompt
  4. Click OK button
    - expect: Dialog closes
    - expect: Entered text is processed

#### 10.5. Test Prompt Alert - Cancel

**File:** `tests/alertsPopups/testPromptAlertCancel.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Click 'Prompt Alert' button
    - expect: Prompt dialog appears
  3. Click Cancel button
    - expect: Dialog closes
    - expect: Input is cancelled

### 11. Window and Tab Interaction Testing

**Seed:** `tests/seed.spec.ts`

#### 11.1. Test New Tab Button

**File:** `tests/windowsAndTabs/testNewTabButton.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate 'New Tab' button in the sidebar
    - expect: New Tab button is visible and clickable
  3. Click 'New Tab' button
    - expect: New browser tab/window is opened
    - expect: Current page remains open

#### 11.2. Test Popup Windows Button

**File:** `tests/windowsAndTabs/testPopupWindowsButton.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate 'Popup Windows' button
    - expect: Popup Windows button is visible and clickable
  3. Click 'Popup Windows' button
    - expect: Popup window is opened
    - expect: Popup contains content

### 12. Mouse Interaction Testing

**Seed:** `tests/seed.spec.ts`

#### 12.1. Test Mouse Hover - Point Me Button

**File:** `tests/mouseInteractions/testMouseHoverPointMe.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Mouse Hover section is visible in the sidebar
  2. Locate 'Point Me' button with instruction 'Move the mouse over the button to open the dropdown menu'
    - expect: Point Me button is visible
  3. Move mouse over 'Point Me' button
    - expect: Dropdown menu appears on hover
    - expect: Menu contains clickable options
  4. Move mouse away from the button
    - expect: Dropdown menu disappears

#### 12.2. Test Double Click - Copy Text

**File:** `tests/mouseInteractions/testDoubleClickCopyText.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Double Click section is visible
  2. Locate Field1 with text 'Hello World!' and empty Field2
    - expect: Field1 contains 'Hello World!'
    - expect: Field2 is empty
  3. Locate 'Copy Text' button with instruction 'Double click on button, the text from Field1 will be copied into Field2'
    - expect: Copy Text button is visible
  4. Double click 'Copy Text' button
    - expect: Text 'Hello World!' is copied from Field1 to Field2

#### 12.3. Test Drag and Drop

**File:** `tests/mouseInteractions/testDragAndDrop.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Drag and Drop section is visible
  2. Locate draggable element with text 'Drag me to my target'
    - expect: Source element is visible
  3. Locate target drop zone with text 'Drop here'
    - expect: Target drop zone is visible
  4. Drag the source element to the target drop zone
    - expect: Element is dragged to target zone
    - expect: Drop operation completes successfully

### 13. Slider Interaction Testing

**Seed:** `tests/seed.spec.ts`

#### 13.1. Test Price Range Slider

**File:** `tests/sliders/testPriceRangeSlider.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Slider section is visible in the sidebar
  2. Locate Price range slider
    - expect: Slider is visible with label 'Price range:'
    - expect: Current range displayed is '$75 - $300'
  3. Interact with the slider to change the price range
    - expect: Slider responds to user interaction
    - expect: Price range value updates

### 14. Links and Navigation Testing

**Seed:** `tests/seed.spec.ts`

#### 14.1. Test Navigation Links - Top Menu

**File:** `tests/linksNavigation/testTopMenuLinks.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Top navigation menu is visible
  2. Verify navigation links: Home, Udemy Courses, Online Trainings, Blog, PlaywrightPractice
    - expect: All navigation links are present and visible
  3. Click 'Home' link
    - expect: Home page is loaded

#### 14.2. Test External Links - Laptop Links

**File:** `tests/linksNavigation/testLaptopLinks.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Labels and Links section is visible
  2. Locate Laptop Links section containing: Apple, Lenovo, Dell
    - expect: All laptop links are visible
  3. Verify 'Apple' link points to https://www.apple.com/
    - expect: Link has correct URL
  4. Verify 'Lenovo' link points to https://www.lenovo.com/
    - expect: Link has correct URL
  5. Verify 'Dell' link points to https://www.dell.com/
    - expect: Link has correct URL

#### 14.3. Test Broken Links

**File:** `tests/linksNavigation/testBrokenLinks.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate Broken Links section
    - expect: Broken links are listed: Errorcode 400, 401, 403, 404, 408, 500, 502, 503
  3. Verify broken link URLs are present
    - expect: All error code links point to deadlinkcity.com with appropriate error parameters

### 15. Form Submission End-to-End Testing

**Seed:** `tests/seed.spec.ts`

#### 15.1. Test Complete Form Submission - All Fields

**File:** `tests/formSubmission/testCompleteFormSubmission.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: GUI Elements form is visible
  2. Fill Name field with 'John Smith'
    - expect: Name field contains 'John Smith'
  3. Fill Email field with 'john.smith@example.com'
    - expect: Email field contains 'john.smith@example.com'
  4. Fill Phone field with '555-1234567'
    - expect: Phone field contains '555-1234567'
  5. Fill Address field with '456 Oak Avenue\nLos Angeles, CA 90001'
    - expect: Address field contains the multi-line address
  6. Select 'Male' radio button
    - expect: Male radio button is selected
  7. Select checkboxes: Monday, Wednesday, Friday
    - expect: Monday, Wednesday, Friday are checked
  8. Select 'Canada' from Country dropdown
    - expect: Canada is selected in dropdown
  9. Select multiple colors: Blue and Green
    - expect: Blue and Green are selected in Colors listbox
  10. Select 'Lion' from Sorted List
    - expect: Lion is selected
  11. Enter Date '12/31/2025' in Date Picker 1
    - expect: Date is entered in mm/dd/yyyy format
  12. Enter Date '25/12/2025' in Date Picker 2
    - expect: Date is entered in dd/mm/yyyy format
  13. Fill Start Date and End Date in Date Range picker
    - expect: Both date range fields are filled
  14. Click Submit button in Date Picker 3 section
    - expect: Submit button is clicked
    - expect: Form processes the date range submission

#### 15.2. Test Form Submission - Minimal Data

**File:** `tests/formSubmission/testFormMinimalData.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Fill only Name field with 'Jane Doe'
    - expect: Name field contains 'Jane Doe'
  3. Leave all other fields empty
    - expect: Other fields remain empty
  4. Click Submit button
    - expect: Submit button processes minimal data

#### 15.3. Test Form Submission - No Data

**File:** `tests/formSubmission/testFormNoData.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Do not fill any form fields
    - expect: All form fields are empty
  3. Click Submit button
    - expect: Submit button can be clicked with empty form

### 16. SVG and Visualization Elements Testing

**Seed:** `tests/seed.spec.ts`

#### 16.1. Test SVG Elements Section

**File:** `tests/svgElements/testSVGElementsDisplay.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: SVG Elements section is visible in the sidebar
  2. Locate SVG Elements section
    - expect: Section contains SVG/image elements
  3. Verify SVG elements are rendered and visible
    - expect: All SVG images are displayed correctly

#### 16.2. Test Visitors Chart

**File:** `tests/svgElements/testVisitorsChart.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Visitors section is visible
  2. Locate Visitors chart
    - expect: Chart is displayed
    - expect: Chart contains visual data representation
  3. Verify chart has associated data table
    - expect: Data table is visible below or with the chart
    - expect: Table contains numeric values

### 17. Mobile and Mobile Labels Testing

**Seed:** `tests/seed.spec.ts`

#### 17.1. Test Mobile Labels Section

**File:** `tests/mobileElements/testMobileLabels.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Labels and Links section is visible
  2. Locate Mobile Labels section
    - expect: Mobile Labels heading is visible
    - expect: Contains labels: Samsung, Real Me, Moto
  3. Verify all mobile brand labels are displayed
    - expect: Samsung label is visible
    - expect: Real Me label is visible
    - expect: Moto label is visible

### 18. Scrolling and Responsive Elements Testing

**Seed:** `tests/seed.spec.ts`

#### 18.1. Test Page Scrolling - Form Section

**File:** `tests/scrollingElements/testScrollingFormSection.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully at top
  2. Scroll down to Upload Files section
    - expect: Upload Files section becomes visible
  3. Continue scrolling to Static Web Table
    - expect: Static Web Table section becomes visible
  4. Scroll to Dynamic Web Table
    - expect: Dynamic Web Table section becomes visible

#### 18.2. Test Scrolling DropDown Element

**File:** `tests/scrollingElements/testScrollingDropdown.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
  2. Locate Scrolling DropDown section in the sidebar
    - expect: Scrolling DropDown element is visible
    - expect: Contains text 'Select an item'
  3. Interact with the scrolling dropdown
    - expect: Dropdown opens and displays scrollable items

#### 18.3. Test Dynamic Button - START

**File:** `tests/scrollingElements/testDynamicStartButton.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Dynamic Button section is visible
  2. Locate START button
    - expect: START button is visible and clickable
  3. Click START button
    - expect: Button responds to click
    - expect: Dynamic action occurs

### 19. Tabs and Content Section Testing

**Seed:** `tests/seed.spec.ts`

#### 19.1. Test Tabs Section

**File:** `tests/tabsSection/testTabsSection.spec.ts`

**Steps:**
  1. Navigate to https://testautomationpractice.blogspot.com/
    - expect: Page loads successfully
    - expect: Tabs section is visible in the sidebar
  2. Locate Tabs section
    - expect: Tabs section contains interactive elements
  3. Verify tab elements are clickable
    - expect: Tab elements respond to clicks
