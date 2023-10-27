import { test, expect } from '@playwright/test';
import {DateTime} from 'luxon';
test('test', async ({ page }) => {
 
 await page.goto('https://www.brighterlawsuite-staging.co.uk/Account/LogOn ');
 // Login to above URL withe given login details
 await loginFunction(page,'DextersAutoTestUser','Test1234');
 // Click on Add New client button and select Dexter williams
 await addNewClient(page);
 // Select Sale Purchase radio button and enter Sale&Purchase Value in New Client
 await selectSaleAndPurchase(page);
 // Enter Client Details in New Client Page
 await newClientDetails(page);
 // After click on next button, page should navigate to Your Fees Modify Sale value
 // Test Step:- Verify Dexter user can modify fees of of Sale section of existing Sale & Purchase post creation

 //Modify Purchase Fee
 //Test step:- Verify Dexter user can modify fees of Purchase section  of existing Sale & Purchase post creation 
  await modifyPurchaseSalesFee(page);

  let CaseLabel:any;
  try {
     CaseLabel = await page.waitForSelector('//h1[text()="Case Communication Preview"]');
    console.log('Element found:'+CaseLabel);
  } catch (error) {
    console.log('Element not found:'+CaseLabel);
  }
 //  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.waitForTimeout(5000);

  const cases = await page.waitForSelector("//ul[@class='list-inline pull-right']");
  const secondChild = await cases.$$("li:nth-child(2)");
  let caseNumber;
  caseNumber = await page.evaluate(element => element.textContent, secondChild[0]);
  caseNumber = caseNumber.split(':')[1].trim();
  console.log('Case-Number:'+caseNumber);

  let fromEmailValue = await editSales(page);

  fromEmailValue = await editPurchase(page, fromEmailValue);

  await page.locator('(//button[@type="submit"])[2]').click();

  await page.getByRole('tab', { name: 'Transaction Details' }).click();

  await logVales(page);

 /*UKP-T220 Document Portal is displayed for Sale  and Purchase for T&T User
   Select sale and purchase check box from Insurct box.*/
 fromEmailValue = await proceedInstruction(page, fromEmailValue);
  await logoutFunction(page,'Automation Test, Dexters');
  await page.waitForTimeout(2000);
/*UKP-218 Verify Turner user can add Add additional transaction to the Purchase & Sale case created by Dexter User
  Login to above URL withe given login details*/
  const user_name='TurnerUser';
  const password='Test1234';
 await loginFunction(page,user_name, password);
 fromEmailValue = await addReMortagage(page, caseNumber, fromEmailValue);
await page.waitForTimeout(2000);

//Verify the Complete button is displayed for each milestone for T&T User 
await page.getByRole('tab', { name: 'Transaction Details' }).click();

/*let expected_sale_milestone:boolean=false;
if(user_name == 'TurnerUser')
{
    expected_sale_milestone = true;
}

   User -- Actual  -- Expected  -- Result
   Turner  -- true  -- true -- true  -- break;
   dexter  -- 
*/
    await salesMileStone_Complete_Button(page,user_name);

    await purchaseMileStone_Complete_Button(page,user_name);

    await mortagageMileStone_Complete_Button(page,user_name);

//Verify the Document Portal is displayed for Sale  and Purchase for T&T User 

await page.getByRole('tab', { name: 'Case Details' }).click();
// document click
await page.waitForSelector('a:has-text("Documents Open Close")');
await page.click('a:has-text("Documents Open Close")');
// sale brochure pdf
const expected_sale_brochure = true;
//await expect(page.locator('(//div[@ng-repeat="document in service.staticDocuments"]//a)[1]')).toBeVisible();
const actual_sale_brochure = await page.isVisible('(//div[@ng-repeat="document in service.staticDocuments"]//a)[1]');
console.log('sale brochure is present::'+actual_sale_brochure);
await page.waitForTimeout(3000);
 // purchase brochure pdf is visible
const expected_purchase_brochure = true;
 //await expect(page.locator('(//*[@id="documents"]/div/div/div[2]/div[3]/div[1]')).toBeVisible();
 const actual_purchase_brochure = await page.isVisible('//*[@id="documents"]/div/div/div[2]/div[3]/div[1]');
 console.log('purchase brochure is present::'+actual_purchase_brochure);
 // Mortagage brochure pdf not display
  const expected_mortagage_brochure = true;
//await expect(page.locator('(//div[@ng-show="service.documents.length === 0"])[3]')).toBeVisible();
const actual_mortagage_brochure= await page.isVisible('(//div[@ng-show="service.documents.length === 0"])[3]');
console.log('No service Document::'+actual_mortagage_brochure);
await logoutFunction(page,'Turner User, Turner and Turner');
await page.waitForTimeout(2000);

//Verify the Complete button is NOT displayed for each milestone for Dexter User 
 
 await loginFunction(page,'DextersAutoTestUser','Test1234');
 await page.getByText('Track Cases').click();
 await page.getByRole('link', { name: 'All Cases' }).click();
 await page.waitForTimeout(2000);
 await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').click();
 await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').fill(caseNumber);

 await page.getByRole('button', { name: ' SEARCH' }).click();
 await page.waitForTimeout(2000);
 await page.click(`(//td[text()='${caseNumber}'])[1]`);
 await page.getByRole('tab', { name: 'Transaction Details' }).click();
 await salesMileStone_Complete_Button(page,'DextersAutoTestUser');
 await purchaseMileStone_Complete_Button(page,'DextersAutoTestUser');
 await mortagageMileStone_Complete_Button(page,'DextersAutoTestUser');
 await page.waitForTimeout(2000);
 await logoutFunction(page,'Automation Test, Dexters')
//Verify Invoices are generated on Complete action of the Sales Milestone
await loginFunction(page,'TurnerUser','Test1234')
await page.getByText('Track Cases').click();
 await page.getByRole('link', { name: 'All Cases' }).click();
 await page.waitForTimeout(2000);
 await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').click();
 await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').fill(caseNumber);

 await page.getByRole('button', { name: ' SEARCH' }).click();
 await page.waitForTimeout(2000);
 await page.click(`(//td[text()='${caseNumber}'])[1]`);
 await page.getByRole('tab', { name: 'Transaction Details' }).click();
 await page.waitForTimeout(2000);
 //Click on sale Complete button and select date from the calendra picker.
  await page.waitForTimeout(2000);
  const date_to_pick = addDaysToDate(2);
   console.log('date_pick:::::'+date_to_pick);
   //await page.getByText('Milestone Date').isVisible();
 await milestoneCompleteDataPicker(page, date_to_pick);
 //Refresh Browser to load invoice in case details.
 await page.reload();
 await page.getByRole('tab', { name: 'Case Details' }).click();
 await page.reload();
 // Invoices details 
  await page.waitForSelector('a:has-text("Invoices Open Close")');
 await page.click('a:has-text("Invoices Open Close")');
 //Sale Invoice Number
 let InvoiceNumber: string | null;
 InvoiceNumber = await page.locator("(//div[@class='date col-sm-4']//a)[1]").textContent();
 console.log("InvoiceNumber::" + InvoiceNumber);
 await page.waitForTimeout(1000);
  //Sale Print Invoice Date
 let InvoiceDate: string | null;
 InvoiceDate = await page.locator("(//div[@class='date col-sm-4']/following-sibling::div)[3]").textContent();
 console.log("InvoiceDate:" + InvoiceDate);
//Sale Print Invoice Total
let InvoiceTotal: string | null;
InvoiceTotal = await page.locator("(//div[@class='user col-sm-4'])[2]").textContent();
console.log("InvoiceTotal:" + InvoiceTotal);
//Purschase Invoice Number
let PurInvoiceNumber: string | null;
 PurInvoiceNumber = await page.locator("(//div[@class='date col-sm-4']//a)[2]").textContent();
 console.log("purInvoiceNumber::" + PurInvoiceNumber);
 await page.waitForTimeout(1000);
  //Purchase Print Invoice Date
  let PurInvoiceDate: string | null;
  PurInvoiceDate = await page.locator("(//div[@class='date col-sm-4']/following-sibling::div)[3]").textContent();
  console.log("purInvoiceDate:" + PurInvoiceDate);
 await page.waitForTimeout(2000);
 //purchase Print Invoice Total
let purInvoiceTotal: string | null;
purInvoiceTotal = await page.locator("(//div[@class='user col-sm-4'])[3]").textContent();
console.log("purInvoiceTotal:" + purInvoiceTotal);
await page.waitForTimeout(2000);

// Verify Invoices are generated on Complete action of the Sales Milestone
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
  await logoutFunction(page,'Turner User, Turner and Turner');
  await page.waitForTimeout(2000);
//Login as Dextersuser
await loginFunction(page,'DextersAutoTestUser','Test1234');
await page.getByText('Track Cases').click();
  await page.getByRole('link', { name: 'All Cases' }).click();
  await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').click();
  await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').fill('CaseNumber');
  await page.getByRole('button', { name: ' SEARCH' }).click();
  await page.getByText('No Results', { exact: true }).click();
  const No_Result = await page.locator('(//div[text()="No Results"])').isVisible();
  console.log("No_Result::"+No_Result);
 await page.waitForTimeout(2000);

 await page.goto('https://www.brighterlawsuite-staging.co.uk/cases/details/757878');
 await page.getByRole('heading', { name: 'Forbidden' }).click();
 const For_bidden = await page.locator('//h1[text()="Forbidden"]');
 await page.getByText('You don\'t have permisson to view that resource. Please contact your manager if y').click();
 await page.waitForTimeout(2000);
 
function addDaysToDate(daysToAdd: number): string {
    const date = DateTime.local().plus({ days: daysToAdd });
    return date.toFormat('dd/MM/yyyy');
  }

 await page.close();
});

async function milestoneCompleteDataPicker(page, date_to_pick: string) {
    await page.waitForSelector('(//li[@class="action"]//button)[1]', { state: 'visible' });
    await page.locator('(//li[@class="action"]//button)[1]').isVisible();
    await page.locator('(//li[@class="action"]//button)[1]').click();
    await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).fill(date_to_pick);
    await page.click('body');
    await page.waitForTimeout(1000);
    //(//li[contains(text(),"Complete")])[2]
    await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
    await page.locator('(//li[@class="action"]//button)[3]').isVisible();
    await page.locator('(//li[@class="action"]//button)[3]').click();
    await page.waitForTimeout(5000);
    //Purchase complete button, Client milstone
 await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
 await page.locator('(//li[@class="action"]//button)[3]').isVisible();
 await page.locator('(//li[@class="action"]//button)[3]').click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).fill(date_to_pick);
 await page.click('body');
 await page.waitForTimeout(3000);
 await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
 await page.locator('(//li[@class="action"]//button)[3]').isVisible(); //(//li[@class='action'])[3]
 await page.locator('(//li[@class="action"]//button)[3]').click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).fill(date_to_pick);
 await page.click('body');
 await page.waitForTimeout(3000);
 await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
 await page.locator('(//li[@class="action"]//button)[3]').isVisible();
 await page.locator('(//li[@class="action"]//button)[3]').click();
await page.waitForTimeout(3000);
// REMORTAGE Milstone complete button
await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
 await page.locator('(//li[@class="action"]//button)[3]').isVisible();
 await page.locator('(//li[@class="action"]//button)[3]').click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).fill(date_to_pick);
 await page.click('body');
 await page.waitForTimeout(3000);
 await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
 await page.locator('(//li[@class="action"]//button)[3]').isVisible(); //(//li[@class='action'])[3]
 await page.locator('(//li[@class="action"]//button)[3]').click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).fill(date_to_pick);
 await page.click('body');
 await page.waitForTimeout(3000);
 await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
 await page.locator('(//li[@class="action"]//button)[3]').isVisible();
 await page.locator('(//li[@class="action"]//button)[3]').click();
await page.waitForTimeout(3000);
}

async function modifyPurchaseSalesFee(page) {
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
    await page.waitForTimeout(5000);

    await page.getByRole('button', { name: 'Next' }).click();
}

async function addReMortagage(page, caseNumber: any, fromEmailValue: any) {
    await page.getByText('Track Cases').click();
    await page.getByRole('link', { name: 'All Cases' }).click();
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').click();
    await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').fill(caseNumber);

    await page.getByRole('button', { name: ' SEARCH' }).click();
    await page.waitForTimeout(2000);
    await page.click(`(//td[text()='${caseNumber}'])[1]`);
    await page.getByRole('link', { name: 'Add Transaction' }).click();
    await page.getByLabel('Remortgage').check();
    await page.getByLabel('Mortgage Value').click();
    await page.getByLabel('Mortgage Value').fill('125');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator("(//button[@title='Email Estimate'])[2]").isVisible();
    await page.locator("(//button[@title='Email Estimate'])[2]").click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Start typing a postcode or address').click();
    await page.getByPlaceholder('Start typing a postcode or address').fill('rg5');
    await page.getByText('RG5 3AB Hanwood Close, Reading').click();
    await page.waitForTimeout(1000);
    await page.getByText('4 Hanwood Mews, Hanwood Close Woodley, Reading, RG5 3AB').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Next' }).click();
    fromEmailValue = await waitForFromEmailToShowValue(page);
    console.log('From-Email-in-mortagage-Flow:' + fromEmailValue);
    await page.getByRole('button', { name: 'Next' }).first().click();
    await page.waitForTimeout(3000);


    const expected_inst_box = true;

    const xpath = "(//div[@class='checkbox']//label)[1]";
    const inst_box = await page.locator(xpath);

    const isElementVisibleAndClickable = await inst_box.isVisible();

    console.log('Instruction_checkbox_present::' + isElementVisibleAndClickable); // will return true or false depending on whether the element has a checkbox

    //expect(expected_inst_box).toBe(isElementVisibleAndClickable);
    return fromEmailValue;
}

async function logoutFunction(page, user:string) {
    await page.getByText(user, { exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Log Out ' }).click();
}

async function proceedInstruction(page, fromEmailValue: any) {
    await page.locator("(//input[@type='checkbox'])[2]").isVisible();
    await page.locator("(//input[@type='checkbox'])[2]").click();

    await page.locator("(//input[@type='checkbox'])[3]").isVisible();
    await page.locator("(//input[@type='checkbox'])[3]").click();

    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Proceed' }).first().click();
    await page.waitForTimeout(3000);
    await page.locator('#ddlInstruct_chosen a').click();
    await page.locator('#ddlInstruct_chosen').getByText('Fredrick Turner (Turner and Turner)').click();
    await page.getByRole('button', { name: 'Instruct' }).click();
    await page.waitForTimeout(2000);
    fromEmailValue = await waitForFromEmailToShowValue(page);
    console.log('From-Email-in-instruct-Flow:' + fromEmailValue);
    await page.locator('(//button[@type="submit"])[2]').click();
    await page.waitForTimeout(3000);

    const expected_instruction_msg = 'There are no matters to be instructed';
    // const actual_instruction_msg = await page.evaluate(() => document.querySelector('div:contains("There are no matters to be instructed")'));
    let actual_instruction_msg = (await page.locator('div:has-text("There are no matters to be instructed")').nth(9).innerText());
    actual_instruction_msg = actual_instruction_msg.split('\n')[2];
    console.log('Instruct_msg::' + actual_instruction_msg);
    //  expect(expected_instruction_msg).toBe(actual_instruction_msg);
    await page.waitForTimeout(2000);
    return fromEmailValue;
}

async function editPurchase(page, fromEmailValue: any) {
    await page.getByRole('tab', { name: 'Transaction Details' }).click();

    await page.waitForTimeout(5000);

    // Purchase Sale fee, recalculate the fee
    const editLinkSelector = "(//a[@class='edit pull-right'])[2]";
    await (await page.waitForSelector(editLinkSelector, { state: 'visible', timeout: 5000 })).click();
    await page.locator('((//label[text()="Property Price"])[2]/following::input)[1]').isVisible();
    await page.locator('((//label[text()="Property Price"])[2]/following::input)[1]').fill('1234');

    await page.getByRole('button', { name: 'Recalculate Fees' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Recalculate All' }).locator('a').click();
    const purchase_edit_confirmation_expected_value = 'You can view the new fees and save below';
    await page.waitForTimeout(3000);
    //div[text()='You can view the new fees and save below']
    await page.waitForSelector('div:text("You can view the new fees and save below")', { state: 'visible' });
    const element1 = page.locator('div:text("You can view the new fees and save below")');
    const purchase_edit_confirmation_actual_value = await element1.textContent();
    console.log("purchase_edit_confirmation_actual_value):" + purchase_edit_confirmation_actual_value);
    expect(purchase_edit_confirmation_expected_value).toBe(purchase_edit_confirmation_actual_value);
    await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
    await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('purchase-testing');
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Yes, communicate' }).click();

    fromEmailValue = await waitForFromEmailToShowValue(page);
    console.log('From-Email-in-Purchase-Flow:' + fromEmailValue);
    return fromEmailValue;
}

async function editSales(page) {
    await page.getByRole('tab', { name: 'Transaction Details' }).click();
    // Edit Sale fee, recalculate the fee
    await page.getByText('Edit Fees').first().click();
    await page.locator('.box > .form-group > input').first().click();
    await page.waitForTimeout(3000);
    await page.locator('.box > .form-group > input').first().fill('222');
    await page.getByRole('button', { name: 'Recalculate Fees' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Recalculate All' }).locator('a').click();
    // assert here --- TO-DO  // #atlwdg-container
    const sales_edit_confirmation_expected_value = 'You can view the new fees and save below';
    await page.waitForTimeout(3000);
    //div[text()='You can view the new fees and save below']
    await page.waitForSelector('div:text("You can view the new fees and save below")', { state: 'visible' });
    const element = page.locator('div:text("You can view the new fees and save below")');
    const sales_edit_confirmation_actual_value = await element.textContent();
    console.log("sales_edit_confirmation_actual_value:" + sales_edit_confirmation_actual_value);
    expect(sales_edit_confirmation_expected_value).toBe(sales_edit_confirmation_actual_value);

    await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
    await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('sales-testing');

    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(5000);

    //await page.locator('//button[text()='Yes, communicate']').first().click();
    await page.getByRole('button', { name: 'Yes, communicate' }).click();
    let fromEmailValue = await waitForFromEmailToShowValue(page);

    console.log('From-Email-in-Sales-Flow:' + fromEmailValue);

    await page.locator('(//button[@type="submit"])[2]').click();
    return fromEmailValue;
}

async function newClientDetails(page) {
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
    await page.locator('form').filter({ hasText: 'Sale Fees, based on property price of £100 and an NPV of £ Legal Fees Net LegalS' }).getByTitle('Modify Fees').click();
    await page.getByRole('textbox', { name: '0' }).click();
    await page.getByRole('textbox', { name: '0' }).fill('100');//Modify Sale value
    await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).click();
     await page.getByRole('textbox', { name: 'Please enter the reason for amending this quote here.' }).fill('test');
     await page.getByRole('button', { name: 'Save Changes' }).click(); //Save changes after modifying the sale value.
    await page.waitForTimeout(2000);
}

async function selectSaleAndPurchase(page) {
    await page.getByRole('radio', { name: 'Sale & Purchase' }).check();
    await page.getByLabel('Sale Price').click();
    await page.getByLabel('Sale Price').fill('100');
    await page.getByLabel('Purchase Postcode').click();
    await page.getByLabel('Purchase Postcode').fill('RG30 3NG');
    await page.getByText('Find Local Authority').click();
    await page.getByLabel('Purchase Price').click();
    await page.getByLabel('Purchase Price').click();
    await page.getByLabel('Purchase Price').fill('200');
}

async function addNewClient(page) {
    await page.getByRole('link', { name: ' Add New Client' }).click();
    await page.locator('a').filter({ hasText: 'Select Team' }).click();
    await page.locator('#introducerTeamId_chosen').getByRole('textbox').fill('D');
    await page.locator('#introducerTeamId_chosen').getByText('Dexter Williams').click();
}

async function loginFunction(page, username:string,password:string) {
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Username').press('Tab');
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log On' }).click();
}

async function logVales(page) {
    await page.waitForTimeout(5000);
    let Salnetval: string | null;
    Salnetval = await page.locator("(//td[@ng-show='!service.totalFeeTBC'])[1]").textContent();
    console.log("Salnetval:" + Salnetval);

    let Salnetvat: string | null;
    Salnetvat = await page.locator("(//td[@ng-show='!service.totalFeeTBC'])[2]").textContent();
    console.log("Salnetvat:" + Salnetvat);

    let Salnetgross: string | null;
    Salnetgross = await page.locator("(//td[@ng-show='!service.totalFeeTBC'])[3]").textContent();
    console.log("Salnetgross:" + Salnetgross);

    let Purnetval: string | null;
    Purnetval = await page.locator("(//h1[contains(.,'Service Details - Purchase')]//parent::div//parent::div[contains(@class,'primary')]//td[contains(.,'Purchase Total')]//parent::tr/td[not(contains(@class,'ng-hide'))])[4]").textContent();
    console.log("Purnetval:" + Purnetval);

    let Purnetvat: string | null;
    Purnetvat = await page.locator("(//h1[contains(.,'Service Details - Purchase')]//parent::div//parent::div[contains(@class,'primary')]//td[contains(.,'Purchase Total')]//parent::tr/td[not(contains(@class,'ng-hide'))])[5]").textContent();
    console.log("Purnetvat:" + Purnetvat);

    let Purnetgross: string | null;
    Purnetgross = await page.locator("(//h1[contains(.,'Service Details - Purchase')]//parent::div//parent::div[contains(@class,'primary')]//td[contains(.,'Purchase Total')]//parent::tr/td[not(contains(@class,'ng-hide'))])[6]").textContent();
    console.log("Purnetgross:" + Purnetgross);
    await page.waitForTimeout(1000);
}

async function waitForFromEmailToShowValue(page) {
    const fromEmail = "(//input[contains(@class,'form-control ng-pristine')])[1]";
    await page.waitForSelector(fromEmail, { state: 'visible', timeout: 5000 });

    let fromEmailValue;
    while (!fromEmailValue) {
        fromEmailValue = await page.inputValue(fromEmail);
        if (!fromEmailValue) {
            await page.waitForTimeout(1000); // wait for 1 second before checking again
        }
    }
    return fromEmailValue;
}
    async function salesMileStone_Complete_Button(page,username) {
        let expected_sale_milestone: boolean = false;
        let actual_sale_milestone = false;
        if(username == 'TurnerUser') // can be made dynamic
        {
            expected_sale_milestone = true;
            await page.waitForSelector('(//li[@class="action"]//button)[1]', { state: 'visible' });
            actual_sale_milestone = await page.isVisible('(//li[@class="action"]//button)[1]');
        } 
        else
        {
            actual_sale_milestone = await page.isVisible('(//li[@class="action"]//button)[1]');
        }
      //  await page.waitForSelector('(//li[@class="action"]//button)[1]', { state: 'visible' });
      
        console.log('Sale_Complete_Button_Visible:' + actual_sale_milestone);
        expect(actual_sale_milestone).toBe(expected_sale_milestone);
    }
    async function purchaseMileStone_Complete_Button(page,username) {
        let expected_purchase_milestone = false;
        let actual_purchase_milestone
        if(username == 'TurnerUser') // can be made dynamic
        {
            expected_purchase_milestone = true;
            await page.waitForSelector('(//li[@class="action"]//button)[2]', { state: 'visible' });
            actual_purchase_milestone = await page.isVisible('(//li[@class="action"]//button)[2]');
        } 
        else
        {
            actual_purchase_milestone = await page.isVisible('(//li[@class="action"]//button)[2]');
        }
    //    await page.waitForSelector('(//li[@class="action"]//button)[2]', { state: 'visible' });
        
        console.log('Purchase_Complete_Button_Visible:' + actual_purchase_milestone);
        expect(actual_purchase_milestone).toBe(expected_purchase_milestone);
    }

    async function mortagageMileStone_Complete_Button(page,username) {
        let expected_mortagage_milestone = false;
        let actual_remortagage_milestone = false;
        if(username == 'TurnerUser') // can be made dynamic
        {
            expected_mortagage_milestone = true;
            await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
             actual_remortagage_milestone = await page.isVisible('(//li[@class="action"]//button)[3]');
        }
        else{
            actual_remortagage_milestone = await page.isVisible('(//li[@class="action"]//button)[3]');
        }
    //    await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
        console.log('ReMortagage_Complete_Button_Visible:' + actual_remortagage_milestone);
        expect(actual_remortagage_milestone).toBe(expected_mortagage_milestone);
        await page.waitForTimeout(5000);
    }

