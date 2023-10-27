import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
 await page.goto('https://www.brighterlawsuite-staging.co.uk/Account/LogOn ');
 // Login to above URL withe given login details
 await page.getByLabel('Username').click();
 await page.getByLabel('Username').fill('DextersAutoTestUser');
 await page.getByLabel('Username').press('Tab');
 await page.getByLabel('Password').fill('Test1234');
 await page.getByRole('button', { name: 'Log On' }).click();
 // Click on Add New client button and select Dexter williams
 await page.getByRole('link', { name: ' Add New Client' }).click();
 await page.locator('a').filter({ hasText: 'Select Team' }).click();
 await page.locator('#introducerTeamId_chosen').getByRole('textbox').fill('D');
 await page.locator('#introducerTeamId_chosen').getByText('Dexter Williams').click();
 // Select Sale Purchase radio button and enter Sale&Purchase Value in New Client
 await page.getByRole('radio', { name: 'Sale & Purchase' }).check();
 await page.getByLabel('Sale Price').click();
 await page.getByLabel('Sale Price').fill('100');
 await page.getByLabel('Purchase Postcode').click();
 await page.getByLabel('Purchase Postcode').fill('RG30 3NG');
 await page.getByText('Find Local Authority').click();
 await page.getByLabel('Purchase Price').click();
 await page.getByLabel('Purchase Price').click();
 await page.getByLabel('Purchase Price').fill('200');
 // Enter Client Details in New Client Page
 await page.locator('a').filter({ hasText: 'Select Title' }).click();
 await page.locator('#titleId_chosen').getByText('Mrs', { exact: true }).click();
 await page.getByLabel('First Name').click();
 await page.getByLabel('First Name').fill('Rathna');
 await page.getByLabel('First Name').press('Tab');
 await page.getByLabel('Last Name').fill('Karlapudi');
 await page.getByLabel('Last Name').press('Tab');
 await page.getByLabel('Email Address').fill('rathnamani.karlapudi@dyedurham.com');
 await page.getByLabel('Phone Number').click();
 await page.getByLabel('Phone Number').fill('441234567899');
 await page.getByRole('button', { name: 'Next' }).click();
 // After click on next button, page should navigate to Your Fees Modify Sale value
 // Test Step:- Verify Dexter user can modify fees of of Sale section of existing Sale & Purchase post creation
 await page.locator('form').filter({ hasText: 'Sale Fees, based on property price of £100 and an NPV of £ Legal Fees Net LegalS' }).getByTitle('Modify Fees').click();
 await page.getByRole('textbox', { name: '0' }).click();
 await page.getByRole('textbox', { name: '0' }).fill('100');//Modify Sale value
 await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
  await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('test');
  await page.getByRole('button', { name: 'Save Changes' }).click(); //Save changes after modifying the sale value.
 await page.waitForTimeout(2000);
 //Modify Purchase Fee
 //Test step:- Verify Dexter user can modify fees of Purchase section  of existing Sale & Purchase post creation 
 await page.locator('form').filter({ hasText: 'Purchase Fees, based on property price of £200 and an NPV of £ Legal Fees Net Le' }).getByTitle('Modify Fees').click();
  await page.getByRole('cell', { name: ' Add Fee Or Discount' }).nth(1).click();
  await page.getByRole('row', { name: 'Fee Name (Required) 0', exact: true }).getByPlaceholder('0').click();
  await page.getByRole('row', { name: 'Fee Name (Required) 0', exact: true }).getByPlaceholder('0').fill('200');
  await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
  await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('test');
  await page.locator('.col-md-8 > div:nth-child(3) > div').click();
  await page.locator('.col-md-8 > div:nth-child(3) > div').click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.locator('form').filter({ hasText: 'Purchase Fees, based on of £200 and an NPV of £ Legal Fees Net LegalServiceFee £' }).getByRole('button', { name: 'Next' }).click();
  
 await page.locator("input[ng-model='client.clientCorrespondenceAddress.addressSearch']").click();
 await page.locator("input[ng-model='client.clientCorrespondenceAddress.addressSearch']").fill('RG30 3NG');
 await page.getByText('1 Ainsdale Crescent Reading, RG30 3NG', { exact: true }).click();

  await page.waitForTimeout(2000);

  await page.locator('(//input[@ng-model="service.caseServiceAddress.addressSearch"])[2]').click();
  await page.locator('(//input[@ng-model="service.caseServiceAddress.addressSearch"])[2]').fill('RG30 3NG');
  await page.getByText('1 Ainsdale Crescent Reading, RG30 3NG', { exact: true }).click();
  await page.waitForTimeout(2000);

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

  await page.getByRole('tab', { name: 'Transaction Details' }).click();
// Edit Sale fee, recalculate the fee
  await page.getByText('Edit Fees').first().click();
  await page.locator('.box > .form-group > input').first().click();
  await page.locator('.row > div:nth-child(2) > .box').first().click();
  await page.locator('.box > .form-group > input').first().click();
  await page.locator('.box > .form-group > input').first().fill('200');
  await page.getByRole('button', { name: 'Recalculate Fees' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Recalculate All' }).locator('a').click();
  await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
  await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('test');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.waitForTimeout(3000);

 // await page.locator("//button[text()='Yes communicate']").first().click();
  await page.getByRole('button', { name: 'Yes, communicate' }).click();
  await page.getByRole('button', { name: 'Next' }).first().click();
  await page.getByRole('tab', { name: 'Transaction Details' }).click();

  await page.waitForTimeout(5000);

// Purchase Sale fee, recalculate the fee
  await page.locator('div:nth-child(2) > div > .col-md-8 > div:nth-child(5) > div > div > div:nth-child(2) > .box > .form-group > input').click();
  await page.locator('div:nth-child(2) > div > .col-md-8 > div:nth-child(5) > div > div > div:nth-child(2) > .box > .form-group > input').fill('100');
  await page.locator('div:nth-child(2) > div > .col-md-8 > div:nth-child(5) > div > div').click();
  await page.getByRole('button', { name: 'Recalculate Fees' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Recalculate All' }).locator('a').click();
  await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
  await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('test');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('button', { name: 'Yes, communicate' }).click();
  await page.getByRole('button', { name: 'Next' }).first().click();
  await page.waitForTimeout(3000);
  let Salnetval :string|null ;
 Salnetval = await page.locator("(//td[@ng-show='!service.totalFeeTBC'])[1]").textContent();
 console.log("Salnetval:"+Salnetval);
 
 let Salnetvat :string|null ;
 Salnetvat = await page.locator("(//td[@ng-show='!service.totalFeeTBC'])[2]").textContent();
 console.log("Salnetvat:"+Salnetvat);

 let Salnetgross :string|null ;
 Salnetgross = await page.locator("(//td[@ng-show='!service.totalFeeTBC'])[3]").textContent();
 console.log("Salnetgross:"+Salnetgross);

 let Purnetval :string|null ;
 Purnetval = await page.locator("(//h1[contains(.,'Service Details - Purchase')]//parent::div//parent::div[contains(@class,'primary')]//td[contains(.,'Purchase Total')]//parent::tr/td[not(contains(@class,'ng-hide'))])[4]").textContent();
 console.log("Purnetval:"+Purnetval);

 let Purnetvat :string|null ;
 Purnetvat = await page.locator("(//h1[contains(.,'Service Details - Purchase')]//parent::div//parent::div[contains(@class,'primary')]//td[contains(.,'Purchase Total')]//parent::tr/td[not(contains(@class,'ng-hide'))])[5]").textContent();
 console.log("Purnetvat:"+Purnetvat);

 let Purnetgross :string|null ;
 Purnetgross = await page.locator("(//h1[contains(.,'Service Details - Purchase')]//parent::div//parent::div[contains(@class,'primary')]//td[contains(.,'Purchase Total')]//parent::tr/td[not(contains(@class,'ng-hide'))])[6]").textContent();
 console.log("Purnetgross:"+Purnetgross);

 await page.waitForTimeout(5000);

 //Verify Dexter user can Instruct to T&T  for the Sale & Purchase case

});