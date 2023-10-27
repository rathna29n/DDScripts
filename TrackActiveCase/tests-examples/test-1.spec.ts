import { test, expect } from '@playwright/test';

test('test', ({ page }) => {
  return page.goto('https://www.brighterlawsuite-staging.co.uk/Account/LogOn')
    .then(() => {
      // Login to above URL withe given login details
      return page.getByLabel('Username').click()
        .then(() => page.getByLabel('Username').fill('DextersAutoTestUser'))
        .then(() => page.getByLabel('Username').press('Tab'))
        .then(() => page.getByLabel('Password').fill('Test1234'))
        .then(() => page.getByRole('button', { name: 'Log On' }).click());
    })
    .then(() => {
      // Click on Add New client button and select Dexter williams
      return page.getByRole('link', { name: ' Add New Client' }).click()
        .then(() => page.locator('a').filter({ hasText: 'Select Team' }).click())
        .then(() => page.locator('#introducerTeamId_chosen').getByRole('textbox').fill('D'))
        .then(() => page.locator('#introducerTeamId_chosen').getByText('Dexter Williams').click());
    })
    .then(() => {
      // Select Sale Purchase radio button and enter Sale&Purchase Value in New Client
      return page.getByRole('radio', { name: 'Sale & Purchase' }).check()
        .then(() => page.getByLabel('Sale Price').click())
        .then(() => page.getByLabel('Sale Price').fill('100'))
        .then(() => page.getByLabel('Purchase Postcode').click())
        .then(() => page.getByLabel('Purchase Postcode').fill('RG30 3NG'))
        .then(() => page.getByText('Find Local Authority').click())
        .then(() => page.getByLabel('Purchase Price').click())
        .then(() => page.getByLabel('Purchase Price').click())
        .then(() => page.getByLabel('Purchase Price').fill('200'));
    })
    .then(() => {
      // Enter Client Details in New Client Page
      return page.locator('a').filter({ hasText: 'Select Title' }).click()
        .then(() => page.locator('#titleId_chosen').getByText('Mrs', { exact: true }).click())
        .then(() => page.getByLabel('First Name').click())
        .then(() => page.getByLabel('First Name').fill('Rathna'))
        .then(() => page.getByLabel('First Name').press('Tab'))
        .then(() => page.getByLabel('Last Name').fill('Karlapudi'))
        .then(() => page.getByLabel('Last Name').press('Tab'))
        .then(() => page.getByLabel('Email Address').fill('rathnamani.karlapudi@dyedurham.com'))
        .then(() => page.getByLabel('Phone Number').click())
        .then(() => page.getByLabel('Phone Number').fill('441234567899'))
        .then(() => page.getByRole('button', { name: 'Next' }).click());
       })
    /*   .then(() => {
        // After click on next button, page should navigate to Your Fees Modify Sale value
        // Test Step:- Verify Dexter user can modify fees of of Sale section of existing Sale & Purchase post creation
        return page.locator('form').filter({ hasText: 'Sale Fees, based on property price of £100 and an NPV of £ Legal Fees Net LegalS' }).getByTitle('ModifySale Fees')
        .then((element) => {
        return element.click();
        })
        // Wait for the Sale Fees form to load
        .then(() => page.waitForSelector('.fees-form'))
        // Modify the sale fees
        .then(() => page.fill('#fees-sale-price', '200'))
        .then(() => page.fill('#fees-sale-npv', '150'))
        .then(() => page.fill('#fees-legal-fees-net', '500'))
        .then(() => page.fill('#fees-legal-s', '50'))
        // Save the modified sale fees
        .then(() => page.click('#save-fees'))
        // Wait for the success message to appear
        .then(() => page.waitForSelector('.message-success'))
        // Verify that the fees were modified correctly
        .then(() => {
        return page.locator('form').filter({ hasText: 'Sale Fees, based on property price of £200 and an NPV of £150 Legal Fees Net LegalS' }).count()
        })
        .then((count) => {
        if (count === 1) {
        console.log('Success: Sale fees were modified correctly.');
        } else {
        console.log('Error: Sale fees were not modified correctly.');
        }
        })
        .catch((error) => {
        console.log('Error:', error);
        })
        .finally(() => {
        // Close the browser
        browser.close(); */await page.goto('https://www.brighterlawsuite-staging.co.uk/Account/LogOn');
        await page.getByLabel('Username').click();
        await page.getByLabel('Username').click();
        await page.getByLabel('Username').fill('DextersAutoTestUser');
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill('Test1234');
        await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('link', { name: ' Add New Client' }).click();
        await page.locator('a').filter({ hasText: 'Select Team' }).click();
        await page.locator('#introducerTeamId_chosen').getByText('Dexter Williams').click();
        await page.getByText('Sale & Purchase').first().click();
        await page.getByLabel('Sale Price').click();
        await page.getByLabel('Sale Price').fill('100');
        await page.getByText('Step 3 Sale Price Mortgage Fee Scale OLDNEW (Assign Name)NEW (Assign Name)OLD Ca').click();
        await page.getByLabel('Purchase Postcode').click();
        await page.getByLabel('Purchase Postcode').click();
        await page.getByLabel('Purchase Postcode').fill('rg');
        await page.getByLabel('Purchase Postcode').press('Enter');
        await page.getByLabel('Purchase Postcode').click();
        await page.getByLabel('Purchase Postcode').click();
        await page.getByLabel('Purchase Postcode').fill('RG30 3NG');
        await page.getByLabel('Purchase Price').click();
        await page.getByLabel('Purchase Price').fill('80');
        await page.locator('a').filter({ hasText: 'Select Title' }).click();
        await page.locator('#titleId_chosen').getByText('Mrs', { exact: true }).click();
        await page.getByLabel('First Name').click();
        await page.getByLabel('First Name').fill('rathna');
        await page.getByLabel('First Name').press('Tab');
        await page.getByLabel('Last Name').fill('karlapudi');
        await page.getByLabel('Email Address').click();
        await page.getByLabel('Email Address').fill('rathnamani.karlapudi@dyedurham.com');
        await page.getByLabel('Phone Number').click();
        await page.getByLabel('Phone Number').fill('441234567890');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('form').filter({ hasText: 'Purchase Fees, based on property price of £80 and an NPV of £ Legal Fees Net Leg' }).getByRole('button', { name: 'Next' }).click();
        await page.locator('#details div').filter({ hasText: 'Client Details Service Address Line 1 is required. Company Title MrMrsMissMsMxMr' }).getByPlaceholder('Start typing a postcode or address').click();
        await page.locator('#details div').filter({ hasText: 'Client Details Service Address Line 1 is required. Company Title MrMrsMissMsMxMr' }).getByPlaceholder('Start typing a postcode or address').press('Control+r');
        await page.locator('#details div').filter({ hasText: 'Client Details Service Address Line 1 is required. Company Title MrMrsMissMsMxMr' }).getByPlaceholder('Start typing a postcode or address').click();
        await page.locator('#details div').filter({ hasText: 'Client Details Service Address Line 1 is required. Company Title MrMrsMissMsMxMr' }).getByPlaceholder('Start typing a postcode or address').fill('RG30 3NG');
        await page.getByText('1 Ainsdale Crescent Reading, RG30 3NG', { exact: true }).click();
        await page.getByPlaceholder('Start typing a postcode or address').nth(2).click();
        await page.getByPlaceholder('Start typing a postcode or address').nth(2).fill('RG30 3NG');
        await page.getByText('2 Ainsdale Crescent Reading, RG30 3NG', { exact: true }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).first().click();
        await page.getByRole('tab', { name: 'Transaction Details' }).click();
        await page.getByText('Edit Fees').first().click();
        await page.locator('.box > .form-group > input').first().click();
        await page.locator('.box > .form-group > input').first().fill('120');
        await page.getByRole('button', { name: 'Recalculate Fees' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Recalculate All' }).locator('a').click();
        await page.getByRole('textbox', { name: '0' }).click();
        await page.getByRole('textbox', { name: '0' }).fill('120');
        await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
        await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('test');
        await page.getByRole('button', { name: 'Save Changes' }).click();
        await page.goto('https://www.brighterlawsuite-staging.co.uk/Emails/Quote/6725/971846');
        await page.goto('https://www.brighterlawsuite-staging.co.uk/Cases/Details/758349');
        await page.getByRole('tab', { name: 'Transaction Details' }).click();
        await page.getByText('Edit Fees').nth(1).click();
        await page.getByRole('row', { name: 'Fee Name (Required) 0 ' }).getByPlaceholder('0').click();
        await page.getByRole('row', { name: 'Fee Name (Required) 0 ' }).getByPlaceholder('0').fill('110');
        await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
        await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('test');
        await page.getByRole('button', { name: 'Save Changes' }).click();
        await page.getByRole('button', { name: 'Yes, communicate' }).click();
        });
  
  
