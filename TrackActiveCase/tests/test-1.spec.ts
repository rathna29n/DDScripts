import { test, expect } from '@playwright/test';
//import {DateTime} from 'luxon';

test('test', async ({ page }) => {
  await page.goto('https://staging.spidercubed-staging.co.uk/Account/LogOn');
// Login to above URL withe given login details
await loginFunction(page,'Rathna_Turneruser','DND@2023');
await page.getByText('DRS').click();
await page.locator('div:nth-child(4) > .link-box > .btn').click();
await page.waitForTimeout(5000);
//Click on DRS to create order
const newly_created_id = await DRSNewOrder(page);
console.log('Newly Created ID::::'+newly_created_id);
//Enter PropertyDetails.... 
await page.getByPlaceholder('Start Typing...').click();
await page.getByPlaceholder('Start Typing...').fill('RG1 3PQ');
await page.waitForTimeout(3000);
await page.getByRole('button', { name: '34 Liverpool Road, READING, Berkshire, RG1 3PQ' }).click();
await page.locator('#reference').click();
await page.locator('#reference').fill(newly_created_id);
await page.locator('#hmlrModalButton').click();
await page.waitForTimeout(1000);
//const popup = await page.waitForEvent('popup');
//const popupPage = await popup.context().newPage();

await page.fill("(//input[@type='password'])[3]",'BGUser001');
await page.fill("(//label[text()='HMLR Password'])[2]/following::input",'landreg001');
await page.click("//button[text()='Save and Continue']");

await page.getByRole('button', { name: ' Continue' }).click();
await page.waitForTimeout(3000);
//Enter Application Details.....
//await page.locator('application-details span').nth(1).click();

await page.locator('a').filter({ hasText: 'Select an Option' }).click();
await page.waitForTimeout(3000);
await page.getByRole('listitem').filter({ hasText: 'Document Registration' }).click();
await page.locator('#applicationType_chosen').getByRole('textbox').click();
await page.locator('#applicationType_chosen').getByText('Charge', { exact: true }).click();
await page.waitForTimeout(3000);
await page.locator('#applicationType_chosen').getByRole('textbox').click();
await page.locator('#applicationType_chosen').getByText('Discharge', { exact: true }).click();
await page.waitForTimeout(3000);
const inputElement = page.locator("(//input[@placeholder='Enter Dealing Title Number'])[1]");
const valueHandle = await inputElement.evaluateHandle((el) => el.value);
const DealingTitleNumber = await valueHandle.jsonValue();
console.log("DealingTitleNumber:: " + DealingTitleNumber);
await page.getByRole('button', { name: ' Continue' }).click();
//Enter Representation And Parties details
await page.getByRole('button', { name: ' Add Party' }).click();
  await page.locator('a').filter({ hasText: 'Select the party type' }).click();
  await page.locator('#partytype_chosen').getByText('Individual').click();
  await page.locator('a').filter({ hasText: 'Select the representation type' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Represented by lodging conveyancer' }).click();
  await page.locator('label').filter({ hasText: 'Is Applicant' }).locator('span').nth(1).click();
  await page.getByRole('textbox').nth(2).click();
  await page.locator('party div').filter({ hasText: 'Forenames *' }).nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Forename');
  await page.getByRole('textbox').nth(2).press('Tab');
  await page.getByRole('textbox').nth(3).fill('Surname');
  await page.getByRole('textbox').nth(3).press('Tab');
  await page.locator('a').filter({ hasText: 'Select the Address For Service Type' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Current' }).click();
  await page.getByRole('button', { name: ' Add Role' }).click();
  await page.locator('a').filter({ hasText: 'Select the application' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Charge$/ }).click();
  await page.locator('a').filter({ hasText: 'Select the role type' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Lender' }).click();
  await page.locator("(//label[text()='MD Reference'])[2]").first().click();
  await page.locator("(//span[text()='Lender']/following::input)[2]").fill('1525244');
  
await page.locator('a').filter({ hasText: 'Select an Option' }).first().click();
await page.getByRole('listitem').filter({ hasText: 'Original' }).click();
/*
  Charge upload -- charge_element -- no need to change
  file_path  -- can be changed, file path can be provided as we need
*/
const file_path:string= "C:\\work\\screenshots\\Capture.JPG";
const charge_element:string = "(//span[text()='Original']/following::input)[2]";
await uploadFile(page,charge_element,file_path);
await page.waitForTimeout(3000);
/*
COPY TYPE / DOCUMENT TYPE Upload
*/
const label_type_element = "(//span[text()='Select an Option']/following::input)[2]";
await uploadFile(page,label_type_element,file_path);


await page.waitForTimeout(5000);


});


async function uploadFile(page,upload_element:string,file_path:string) {
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator(upload_element).click();
  const filechooser = await fileChooserPromise;
  //console.log('File-Upload-Element::'+filechooser.element());
  filechooser.setFiles(file_path);
}

async function DRSNewOrder(page) {
  await page.locator('a').filter({ hasText: 'SELECT COMPANY' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#companySelect_chosen').getByText('Turner and Turner').click();
  await page.waitForTimeout(2000);
  await page.locator('#branches_chosen a').click();
  await page.locator('#branches_chosen').getByText('Yorkminster').click();
  await page.locator('a').filter({ hasText: 'Select an Option' }).click();
  await page.waitForTimeout(3000);
  await page.locator('#teams_chosen').getByRole('textbox').fill('lin');
  await page.locator('#teams_chosen').getByText('Lindsey Williams').click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Next' }).click();
 const url = await page.url();
 const url_tokens = url.split("/");
 const newOrderId = url_tokens[url_tokens.length-1]  // arrays work with index... length will be 5, we need 4th index
 //console.log('URL::'+url);
 //console.log('Newly created ID:'+newOrderId);
  await page.getByRole('button', { name: 'New Order' }).click();
  return newOrderId;
}

async function loginFunction(page, username:string,password:string) {
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Log On' }).click();
}