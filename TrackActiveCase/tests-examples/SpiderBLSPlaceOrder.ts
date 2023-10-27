import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 120000, // 120 seconds
  // other configuration options
};

export default config;

test('test', async ({ page }) => {
  page.setDefaultTimeout(300000);
  await page.goto('https://www.brighterlawsuite-staging.co.uk/Account/LogOn');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('TurnerUser');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Test1234');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('link', { name: ' Add New Client' }).click();
  await page.locator('a').filter({ hasText: 'Select Team' }).click();
  await page.locator('#introducerTeamId_chosen').getByRole('textbox').fill('l');
  await page.locator('#introducerTeamId_chosen').getByText('Lindsey Williams').click();
  await page.getByText('Purchase', { exact: true }).first().click();
  await page.getByLabel('Purchase Postcode').click();
  await page.getByLabel('Purchase Postcode').fill('rg303ng');
  await page.getByText('Find Local Authority').click();
  await page.getByLabel('Purchase Price').click();
  await page.getByLabel('Purchase Price').fill('100');
  await page.locator('a').filter({ hasText: 'Select Title' }).click();
  await page.locator('#titleId_chosen').getByText('Mrs', { exact: true }).click();
 
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Rathna');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('karlapudi');
  await page.getByLabel('Email Address').click();

  await page.getByLabel('Email Address').fill('rathnamani.karlapudi@dyedurham.com');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('1234567890');
  await page.getByRole('button', { name: 'Next' }).click(); // casescreate -> estimate page
  await page.waitForURL('**/Cases/Create#/estimate/**', { waitUntil: "load" }); // Need to wait for the page.
  await page.getByRole('button', { name: 'Next' }).click(); // estimate page --> confirm details

 // await page.locator('#details div').filter({ hasText: 'Client Details Service Address Line 1 is required. Company Title MrMrsMissMsMxMr' }).getByPlaceholder('Start typing a postcode or address').click();
 // await page.locator('#details div').filter({ hasText: 'Client Details Service Address Line 1 is required. Company Title MrMrsMissMsMxMr' }).getByPlaceholder('Start typing a postcode or address').fill('rg301aa');
 // await page.getByText('192 Oxford Road, RG30 1AA', { exact: true }).click();

  await page.getByPlaceholder('Start typing a postcode or address').nth(1).click();
  await page.getByPlaceholder('Start typing a postcode or address').nth(1).fill('RG30 3NG');
  await page.getByText('1 Ainsdale Crescent Reading, RG30 3NG', { exact: true }).click();

  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Start typing a postcode or address').nth(0).click();
  await page.getByPlaceholder('Start typing a postcode or address').nth(0).fill('RG30 3NG');
  await page.getByText('1 Ainsdale Crescent Reading, RG30 3NG', { exact: true }).click();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Next' }).click();

  let CaseLabel:any;
  try {
     CaseLabel = await page.waitForSelector('//h1[text()="Case Communication Preview"]', { timeout: 5000 });
    console.log('Element found:'+CaseLabel);
  } catch (error) {
    console.log('Element not found:'+CaseLabel);
  }
 //  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.waitForTimeout(5000);

  const cases = await page.waitForSelector("//ul[@class='list-inline pull-right']");
  const secondChild = await cases.$$("li:nth-child(2)");
  const caseNumber = await page.evaluate(element => element.textContent, secondChild[0]);
  console.log('Case-Number:'+caseNumber);
   
  /////////////////////////////////////////////////////

  const orderPromise_newtab = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Order ' }).click();

  const orderPage = await orderPromise_newtab;
  orderPage.setDefaultTimeout(120000);
 // await orderPage.waitForTimeout(5000);

  await orderPage.locator('a').filter({ hasText: 'SELECT COMPANY' }).click();
  await orderPage.waitForTimeout(1000);
  await orderPage.locator('#companySelect_chosen').getByText('Turner and Turner').click();
   
 

  await orderPage.locator('#branches_chosen a').filter({ hasText: 'Select an Option' }).isVisible();
  await orderPage.locator('#branches_chosen a').filter({ hasText: 'Select an Option' }).click();
  await orderPage.locator('#branches_chosen').getByText('Yorkminster').click();

// await orderPage.locator('a').filter({ hasText: 'Select an Option' }).isVisible();
 await orderPage.locator('a').filter({ hasText: 'Select an Option' }).click();
 await orderPage.waitForTimeout(1000);
 await orderPage.locator('#teams_chosen').getByRole('textbox').isVisible();
 await orderPage.locator('#teams_chosen').getByRole('textbox').fill('L');
 await orderPage.waitForTimeout(1000);
 await orderPage.locator('#teams_chosen').getByText('Lindsey Williams').click();
 
 /*await orderPage.locator('#teams_chosen a').filter({ hasText: 'Select an Option' }).isVisible();
 await orderPage.locator('#teams_chosen a').filter({ hasText: 'Select an Option' }).click();
 await orderPage.locator('#teams_chosen').getByText('Lindsey Williams').click();*/

 
  await orderPage.waitForTimeout(2000);
  await orderPage.getByRole('button', { name: 'Next' }).isVisible();
  await orderPage.getByRole('button', { name: 'Next' }).click();
  await orderPage.waitForTimeout(3000);
  //await orderPage.getByPlaceholder('Start Typing...').nth(0).click();
  await orderPage.getByPlaceholder('Start Typing...').nth(0).fill('RG30 3NG');
  await orderPage.getByText('1 Ainsdale Crescent, READING, Berkshire, RG30 3NG', { exact: true }).click();
  await orderPage.waitForTimeout(5000);
  await orderPage.getByRole('button', { name: 'Next ' }).isVisible();
  await orderPage.getByRole('button', { name: 'Next ' }).click();
  await orderPage.waitForTimeout(3000);
  await orderPage.locator('.clearfix > a:nth-child(2)').first().isVisible();
  await orderPage.locator('.clearfix > a:nth-child(2)').first().click();
  
  //await orderPage.locator("//a[@title='Add to basket']")[1].isVisible();
  //await orderPage.locator("//a[@title='Add to basket']")[1].click();

  await orderPage.getByText('Proceed With Order').isVisible();
  await orderPage.getByText('Proceed With Order').click();

  await orderPage.getByText('Funds To Collect').click();
  await orderPage.locator('#customer_firstname').click();
  await orderPage.locator('#customer_firstname').press('Control+r');
  await orderPage.locator('#customer_firstname').fill('Rathna');
  await orderPage.locator('#customer_lastname').click();
  await orderPage.locator('#customer_lastname').fill('karlapudi');
  await orderPage.locator('#customer_homephone').click();
  await orderPage.locator('#customer_homephone').fill('1234567891');
  await orderPage.locator('#customer_email').click();
  await orderPage.locator('#customer_email').fill('rathnamani.karlapudi@dyedurham.com');
  await orderPage.getByLabel('Use Order Address').check();
  await orderPage.getByText('Our Reference', { exact: true }).click();
 
  await orderPage.getByRole('button', { name: 'Place Order ' }).click();

  await orderPage.waitForTimeout(2000);
  //orderPage.locator('//div[@class="sub-heading"]//h2[1]').isVisible();
  const orderDetHdr = orderPage.locator('//div[@class="sub-heading"]//h2[1]').innerText();

  console.log('OrderDetailsHeader::'+orderDetHdr);

  const OrderId:string = (await orderDetHdr).split(" ")[1];
  console.log('OrderId::'+OrderId);
  await orderPage.waitForTimeout(2000);
   await orderPage.getByText('Turner User, Turner and Turner', { exact: true }).click();
  await orderPage.getByRole('link', { name: 'Log Out ' }).click();
  await orderPage.waitForTimeout(3000);
  await orderPage.getByLabel('Username').click();
  await orderPage.getByLabel('Username').fill('rkarlapudicore');
  await orderPage.getByLabel('Password').click();
  await orderPage.getByLabel('Password').click();
  await orderPage.getByLabel('Password').fill('DND@2023');
  await orderPage.getByRole('button', { name: 'Log On' }).click();
  await orderPage.getByText('View Orders').first().click();
  await orderPage.getByRole('link', { name: 'View Orders' }).click();
  await orderPage.waitForTimeout(2000);

  await orderPage.getByPlaceholder('Case Number, Postcode, Street Name').click();
  await orderPage.getByPlaceholder('Case Number, Postcode, Street Name').fill(OrderId);
  await orderPage.getByRole('button', { name: ' SEARCH' }).click();
  await orderPage.waitForTimeout(2000);
  await orderPage.getByText(OrderId).click();
  await orderPage.waitForTimeout(2000);
  await orderPage.getByRole('button', { name: 'Process Order ' }).click();
  await orderPage.waitForTimeout(2000);
  await orderPage.getByRole('button', { name: 'Pay By BACS ' }).click();
  await orderPage.waitForTimeout(2000);
  await orderPage.getByRole('button', { name: 'Confirm ' }).click();
  await orderPage.waitForTimeout(2000);
  await orderPage.getByText('YES').click();//button[text()='YES']
  await orderPage.getByText('Funds Received ').click();//button[text()='Funds Received ']
  await orderPage.getByText('Process Order ').click();//button[text()='Process Order ']
  await orderPage.waitForTimeout(2000);
  //a[contains(text(),'rathnamani karlapudi, Dye & Durham (UK) Limited')]
  await orderPage.getByText('rathnamani karlapudi, Dye & Durham (UK) Limited', { exact: true }).click();
  await orderPage.getByRole('link', { name: 'Log Out ' }).click();
  await orderPage.waitForTimeout(5000);
  await orderPage.close();
 // Track Cases
  
  await page.getByText('Track Cases').click();
  await page.getByText('All Cases').click();
  const defaultCaseNumber = '';
  const CaseId: string = caseNumber?.split(":")[1] ?? '';
  console.log('CaseId::'+CaseId);
  const search = page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname');
  await search.click();
 // await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').fill(CaseId);
   await search.fill(CaseId || defaultCaseNumber); 
  await page.getByRole('button', { name: ' SEARCH' }).click();
  await page.waitForTimeout(3000);
  await page.getByText(CaseId).click();
  await page.waitForTimeout(5000);
  await page.getByText('SEARCHES/PRODUCTS Open Close').click();
 const expectedResult = 'Regulated Local Authority Search (2016)';
//li[text()='Regulated Local Authority Search (2016)']
  const locator = page.locator("li:text('Regulated Local Authority Search (2016)')");
  const elementHandle = locator.first();
  const actualResult = await elementHandle.textContent();
  console.log('searchResult:'+actualResult)
  expect(actualResult).toBe(expectedResult);
  await page.waitForTimeout(5000);
  await page.close();
});