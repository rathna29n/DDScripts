import { test, expect, Page } from '@playwright/test';
//import {DateTime} from 'luxon';
test('test', async ({ page }) => {
  await page.goto('https://www.brighterlawsuite-staging.co.uk/account/logon?ReturnUrl=%2fcases%2fdetails%2f758474');
  //Verify Invoices are generated on Complete action of the Sales Milestone
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('Turneruser');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Test1234');
  await page.getByLabel('Password').press('Enter');
 await page.getByRole('link', { name: 'Back to Cases' }).click();
 await page.getByRole('button', { name: 'More Option' }).click();  
 //await page.waitForTimeout(3000); 
 await page.getByText('Track Cases').click();
  await page.getByRole('link', { name: 'All Cases' }).click();
  await page.getByRole('button', { name: 'More Options ' }).click();
  await page.locator('#ddlIntroducerCoy_chosen a').click();
  await page.locator('#ddlIntroducerCoy_chosen').getByRole('textbox').fill('t');
  await page.locator('#ddlIntroducerCoy_chosen').getByText('Turner and Turner').click();
  await page.locator('#ddlCreatedBy_chosen a').click();
  await page.locator('#ddlCreatedBy_chosen').getByRole('textbox').fill('m');
  await page.locator('#ddlCreatedBy_chosen').getByText('Marina Tchechmedjieva').click();
  await page.getByRole('button', { name: ' SEARCH' }).click();
  await page.locator('(//table[contains(@class,"table results")]//td)[2]').innerText();
  const CaseNumber = await page.locator('(//table[contains(@class,"table results")]//td)[2]').innerText();
  console.log("CaseNumber::"+CaseNumber);
 //await logoutFuntion
 await page.getByText('Turner User, Turner and Turner').click();
  await page.getByRole('link', { name: 'Log Out ' }).click();

 //await loginFunction(page,'DextersAutoTestUser','Test1234');
 await page.getByLabel('Username').click();
 await page.getByLabel('Username').fill('DextersAutoTestUser');
 await page.getByLabel('Username').press('Tab');
 await page.getByLabel('Password').fill('Test1234');
 await page.getByLabel('Password').press('Enter');
 await page.getByText('Track Cases').click();
 await page.getByRole('link', { name: 'All Cases' }).click();
 await page.waitForTimeout(2000);
 await page.getByRole('link', { name: 'All Cases' }).click();
  await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').click();
  await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').fill('757878');
  await page.getByRole('button', { name: ' SEARCH' }).click();
  await page.getByText('No Results', { exact: true }).click();
  const No_Result = await page.locator('(//div[text()="No Results"])').isVisible();
 await page.waitForTimeout(2000);
 
 await page.goto('https://www.brighterlawsuite-staging.co.uk/cases/details/757878');
 const For_bidden = await page.locator('//h1[text()="Forbidden"]');
 await page.waitForTimeout(5000);
});
 






 


