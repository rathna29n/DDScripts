import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.brighterlawsuite-staging.co.uk/Account/LogOn');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('TurnerUser');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Test1234');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('link', { name: ' Add New Client' }).click();
  await page.locator('a').filter({ hasText: 'Select Team' }).click();
  await page.locator('#introducerTeamId_chosen').getByRole('textbox').fill('lin');
  await page.locator('#introducerTeamId_chosen').getByText('Lindsey Williams').click();
  await page.locator('input[name="\\34 "]').check();
  await page.getByLabel('Purchase Postcode').click();
  await page.getByLabel('Purchase Postcode').fill('RG30 3NG');
  await page.getByText('Step 3 Sale Price Mortgage Fee Scale Pie fee testBE Default Feescale TestTESTING').click();
  await page.getByText('Find Local Authority').click();
  await page.getByLabel('Purchase Price').click();
  await page.getByLabel('Purchase Price').fill('100');
  await page.getByText('Step 3 Sale Price Mortgage Fee Scale Pie fee testBE Default Feescale TestTESTING').click();
  await page.locator('a').filter({ hasText: 'Select Title' }).click();
  await page.locator('#titleId_chosen').getByText('Mrs', { exact: true }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Rathna');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('Karlapudi');
  await page.getByLabel('Last Name').press('Tab');
  await page.getByLabel('Email Address').fill('rathnamani.karlapudi@dyedurham.com');
  await page.getByLabel('Email Address').press('Tab');
  await page.getByLabel('Phone Number').fill('441234567890');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.goto('https://www.brighterlawsuite-staging.co.uk/Cases/Create#/estimate/edaa968c-45fb-4e1c-9133-fde06b2cfaea');
  await page.getByRole('heading', { name: 'Your Fees' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#details div').filter({ hasText: 'Client Details Service Address Line 1 is required. Company Title MrMrsMissMsMxMr' }).getByRole('checkbox').check();
  await page.locator('#details div').filter({ hasText: 'Client Details Service Address Line 1 is required. Company Title MrMrsMissMsMxMr' }).getByRole('checkbox').uncheck();
  await page.locator('#details div').filter({ hasText: 'Client Details Correspondence Address Line 1 is required. Correspondence Address' }).getByPlaceholder('Start typing a postcode or address').click();
  await page.locator('#details div').filter({ hasText: 'Client Details Correspondence Address Line 1 is required. Correspondence Address' }).getByPlaceholder('Start typing a postcode or address').fill('RG30 1AA');
  await page.getByText('192 Oxford Road Reading, RG30 1AA').click();
  await page.locator('div').filter({ hasText: 'Confirm Details Case Details Case Reference Client Details Service Address Line ' }).nth(2).click();
  await page.getByPlaceholder('Start typing a postcode or address').nth(1).click();
  await page.getByPlaceholder('Start typing a postcode or address').nth(1).fill('RG30 3NG');
  await page.getByText('1 Ainsdale Crescent Reading, RG30 3NG', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).first().click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Order ' }).click();
  const page1 = await page1Promise;
  await page1.locator('a').filter({ hasText: 'SELECT COMPANY' }).click();
  await page1.locator('#companySelect_chosen').getByText('Turner and Turner').click();
  await page1.locator('#branches_chosen a').click();
  await page1.locator('#branches_chosen').getByText('Yorkminster').click();
  await page1.locator('a').filter({ hasText: 'Select an Option' }).click();
  await page1.locator('#teams_chosen').getByText('Fredrick Turner').click();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByRole('button', { name: '1 Ainsdale Crescent, READING, Berkshire, RG30 3NG', exact: true }).click();
  await page1.getByRole('button', { name: 'Next ' }).click();
  await page1.locator('#localAuthority_chosen a').click();
  await page1.locator('#localAuthority_chosen').getByText('Allerdale Borough Council').click();
  await page1.locator('a').filter({ hasText: 'Select an Option' }).click();
  await page1.locator('#waterAuthority_chosen').getByText('Severn Trent Water').click();
  await page1.getByRole('button', { name: 'Next ' }).click();
  await page1.locator('div:nth-child(2) > .product > .clearfix > a:nth-child(2)').first().click();
  await page1.getByText('Proceed With Order').click();
  await page1.getByText('Funds To Collect').click();
  await page1.locator('#customer_firstname').click();
  await page1.locator('#customer_firstname').fill('Rathna');
  await page1.locator('#customer_firstname').press('Tab');
  await page1.locator('#customer_lastname').fill('Karlapudi');
  await page1.locator('#customer_homephone').click();
  await page1.locator('#customer_homephone').fill('441234567890');
  await page1.locator('#customer_email').click();
  await page1.locator('#customer_email').fill('rathnamani.karlapudi@dywdurham.com');
  await page1.getByLabel('Use Order Address').check();
  await page1.locator('[id="\\31 109"]').click();
  await page1.locator('[id="\\31 109"]').fill('Rathna');
  await page1.locator('[id="\\31 109"]').press('Tab');
  await page1.locator('[id="\\31 110"]').fill('Karlpudi');
  await page1.getByRole('button', { name: 'Place Order ' }).click();
  await page1.getByRole('group').getByText('Order Number').click();
  await page1.getByText('0800 765 4321').click();
  await page1.getByText('1522242', { exact: true }).click();
  await page1.getByRole('group').getByText('Order Number').click();
  await page1.getByText('1522242', { exact: true }).click();
  await page1.getByText('Order Summary').click();
  await page1.getByText('Turner User, Turner and Turner', { exact: true }).click();
  await page1.getByRole('link', { name: 'Log Out ' }).click();
  await page1.getByLabel('Username').click();
  await page1.getByLabel('Username').fill('rkarlapudicore');
  await page1.getByLabel('Username').press('Tab');
  await page1.getByLabel('Password').fill('DnD@2023');
  await page1.getByLabel('Password').press('Enter');
  await page1.getByLabel('Password').click();
  await page1.getByLabel('Password').fill('DND@2023');
  await page1.getByLabel('Password').press('Enter');
  await page1.getByText('View Orders').first().click();
  await page1.getByRole('link', { name: 'View Orders' }).click();
  await page1.getByPlaceholder('Case Number, Postcode, Street Name').click();
  await page1.getByPlaceholder('Case Number, Postcode, Street Name').fill('1522242');
  await page1.getByRole('button', { name: ' SEARCH' }).click();
  await page1.getByRole('cell', { name: 'Residential Order 1522242' }).click();
  await page1.getByText('Order Summary').click();
  await page1.getByRole('button', { name: 'Process Order ' }).click();
  await page1.getByRole('button', { name: 'Pay By BACS ' }).click();
  await page1.getByRole('button', { name: 'Confirm ' }).click();
  await page1.goto('https://staging.spidercubed-staging.co.uk/Orders/Details/1522242');
  await page1.getByRole('button', { name: 'Funds Received ' }).click();
  await page1.getByRole('button', { name: 'Process Order ' }).click();
  await page.goto('https://www.brighterlawsuite-staging.co.uk/Cases/Details/758146');
  await page.getByRole('heading', { name: 'SEARCHES/PRODUCTS Open ' }).click();
  await page.getByRole('heading', { name: 'SEARCHES/PRODUCTS Open ' }).click();
  await page.getByRole('button', { name: 'SEARCHES/PRODUCTS Open ' }).click();
  await page.getByText('Regulated Local Authority Search (2016)').click();
});