import { test, expect } from '@playwright/test';


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
await page.getByPlaceholder('Start Typing...').fill('RG30 3NG');
await page.waitForTimeout(3000);
await page.getByRole('button', { name: '1 Ainsdale Crescent, READING, Berkshire, RG30 3NG', exact: true }).click();
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
await page.locator('a').filter({ hasText: 'Select an Option' }).click();
await page.waitForTimeout(3000);
await page.getByRole('listitem').filter({ hasText: 'Document Registration' }).click();
await page.locator('#applicationType_chosen').getByRole('textbox').click();
await page.locator('#applicationType_chosen').getByText('Alteration of Register', { exact: true }).click();
await page.waitForTimeout(3000);
const applicationtype = await page.locator("//div[@id='applicationType_chosen']/ul[1]/li[1]/span[1]").innerText();

console.log('applicationtype::'+applicationtype);
await page.waitForTimeout(3000);

const PRIORITY= await page.locator("//ul[contains(@class,'ng-pristine ng-untouched')]//li[1]").innerText();
console.log('PRIORITY::'+PRIORITY);
await page.waitForTimeout(3000);
const inputElement = page.locator("(//input[@placeholder='Enter Dealing Title Number'])[1]");
const valueHandle = await inputElement.evaluateHandle((el) => el.value);
const DealingTitleNumber = await valueHandle.jsonValue();
console.log("DealingTitleNumber:: " + DealingTitleNumber);
await page.getByRole('button', { name: ' Continue' }).click();
await page.waitForTimeout(3000);

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
  await page.waitForTimeout(3000);
 // await page.getByText("(//label[text()='Application'])").isVisible();
 
 const autoselectappname:string = 'xpath=//select[@ng-model="role.application"]';
 await fetchAutoSelectedValues(page,autoselectappname,);
 await page.waitForTimeout(3000);

 const autoselectrole:string = '//label[text()="Role type"]/following-sibling::select';
 await fetchAutoSelectedValues(page,autoselectrole,);
 await page.waitForTimeout(3000);


 await page.getByRole('button', { name: ' Continue' }).click();
 await page.waitForTimeout(3000);
 
 
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
//const label_type_element = "(//span[text()='Select an Option']/following::input)[2]";
//await uploadFile(page,label_type_element,file_path);
await page.getByRole('button', { name: ' Continue' }).click();
await page.waitForTimeout(3000);

//Check the Fee Values and Fee should display as zero
await page.getByText("(//label[text()='Value(£)']/following::input)[1]])").isVisible();
 const Value = await page.locator("(//input[@readonly='readonly'])[1]").innerText();
 console.log("Value::"+Value);
 //chexking the fee 
 await page.getByLabel("(//label[text()='Fee(£)']/following::input)[1]").isVisible();
 const Fee = await page.locator("(//label[text()='Fee(£)']/following::input)[1]").innerText();
 console.log("Fee::"+Fee);
 await page.getByRole('button', { name: ' Continue' }).click();
//Place Order
 await page.locator('div:nth-child(3) > label > .custom-toggle').click();
 await page.getByRole('button', { name: 'Place Order ' }).click();

 await page.waitForTimeout(2000);
 const order_Details_Header = await page.locator("(//div[@class='sub-heading']//h2[1])").innerText();

 console.log('OrderDetailsHeader::'+order_Details_Header);

 const OrderId:string = (await order_Details_Header).split(" ")[1];
 console.log('OrderId::'+OrderId);

await page.waitForTimeout(5000);


});


async function fetchAutoSelectedValues(page,autoselectvalue:string) {
 const elementHandle = await page.$(autoselectvalue);
 const autoselectedvalue = await page.evaluate((select) => {
   if (select instanceof HTMLSelectElement) {
     const selectedIndex = select.selectedIndex;
     return select.options[selectedIndex].label;
   } else if (select instanceof SVGElement) {
     const selectedOption = select.querySelector('option[selected="selected"]');
     return selectedOption ? selectedOption.getAttribute('label') : null;
   } else {
     return null;
   }
 }, elementHandle);


 console.log('AutoSelectedValue::', autoselectedvalue);
}



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
