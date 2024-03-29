import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://spidercubed-staging.co.uk/account/logon?ReturnUrl=%2f');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('Rathna_TurnerUser');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('DND@2023');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.locator('div:nth-child(4) > .link-box > .btn').click();
  await page.locator('a').filter({ hasText: 'SELECT COMPANY' }).click();
  await page.locator('#companySelect_chosen').getByText('Turner and Turner').click();
  await page.locator('#branches_chosen a').click();
  await page.locator('#branches_chosen').getByText('Yorkminster').click();
  await page.locator('a').filter({ hasText: 'Select an Option' }).click();
  await page.locator('#teams_chosen').getByRole('textbox').fill('li');
  await page.locator('#teams_chosen').getByText('Lindsey Williams').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'New Order' }).click();
  await page.getByPlaceholder('Start Typing...').click();
  await page.getByPlaceholder('Start Typing...').fill('RG303NG');
  await page.getByRole('button', { name: '1 Ainsdale Crescent, READING, Berkshire, RG30 3NG', exact: true }).click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('a').filter({ hasText: 'Select an Option' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Document Registration' }).click();
  await page.locator('#applicationType_chosen').getByRole('textbox').click();
  await page.locator('#applicationType_chosen').getByText('Death of Joint Proprietor').click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.getByRole('button', { name: ' Add Party' }).click();
  await page.locator('a').filter({ hasText: 'Select the party type' }).click();
  await page.locator('#partytype_chosen').getByText('Individual').click();
  await page.locator('a').filter({ hasText: 'Select the representation type' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Represented by lodging conveyancer' }).click();
  await page.locator('label').filter({ hasText: 'Is Applicant' }).locator('span').nth(1).click();
  await page.locator('label').filter({ hasText: 'Is Applicant' }).locator('span').nth(1).click();
  await page.getByLabel('Is Applicant').press('t');
  await page.getByLabel('Is Applicant').press('e');
  await page.getByLabel('Is Applicant').press('s');
  await page.getByLabel('Is Applicant').press('t');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('test');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('test');
  await page.locator('a').filter({ hasText: 'Select the Address For Service Type' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Current' }).click();
  await page.getByRole('button', { name: ' Add Party' }).click();
  await page.locator('a').filter({ hasText: 'Select the party type' }).click();
  await page.getByText('Individual').nth(4).click();
  await page.locator('a').filter({ hasText: 'Select the representation type' }).click();
  await page.getByText('Represented by lodging conveyancer', { exact: true }).nth(4).click();
  await page.locator('div:nth-child(5) > div > .animated > .tabbed-content-block-panel > div > div:nth-child(2) > label > .checkmark').first().click();
  await page.locator('div:nth-child(5) > div > .animated > .tabbed-content-block-panel > div > div:nth-child(2) > label > .checkmark').first().click();
  await page.locator('div:nth-child(5) > div > .animated > .tabbed-content-block-panel > div:nth-child(2) > div > .form-control').first().click();
  await page.locator('div:nth-child(5) > div > .animated > .tabbed-content-block-panel > div:nth-child(2) > div > .form-control').first().fill('test');
  await page.locator('div:nth-child(5) > div > .animated > .tabbed-content-block-panel > div:nth-child(2) > div:nth-child(2) > .form-control').fill('t');
  await page.locator('div:nth-child(5) > div > .animated > .tabbed-content-block-panel > div:nth-child(2) > div:nth-child(2) > .form-control').click();
  await page.locator('div:nth-child(5) > div > .animated > .tabbed-content-block-panel > div:nth-child(2) > div:nth-child(2) > .form-control').fill('test');
  await page.locator('a').filter({ hasText: 'Select the Address For Service Type' }).click();
  await page.getByText('Current').nth(4).click();
  await page.getByRole('button', { name: ' Add Role' }).nth(1).click();
  await page.locator('a').filter({ hasText: 'Select the application' }).click();
  await page.locator('.tabbed-content-block-subsection > div > .chosen-container > .chosen-drop > .chosen-search > input').first().fill('d');
  await page.getByRole('listitem').filter({ hasText: 'Death of Joint Proprietor' }).click();
  await page.locator('a').filter({ hasText: 'Select the role type' }).click();
  await page.locator('.tabbed-content-block-subsection > div:nth-child(3) > .chosen-container > .chosen-drop > .chosen-search > input').fill('a');
  await page.getByRole('listitem').filter({ hasText: 'Power Of Attorney' }).click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('#DocumentUpload_Mandatory_4423503').click();
  await page.locator('a').filter({ hasText: 'Select an Option' }).click();
  await page.locator('a').filter({ hasText: 'Select an Option' }).click();
  await page.locator('#DocumentUpload_Mandatory_4423503').click();
  await page.locator('#DocumentUpload_Mandatory_4423503').setInputFiles('Capture.JPG');
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('div:nth-child(3) > label > .custom-toggle').click();
  await page.getByRole('button', { name: 'Place Order ' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});