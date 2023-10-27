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

 // Click on the dropdown
 await page.locator('#applicationType_chosen').getByRole('textbox').click();

 // Wait for the options to load
 await page.waitForSelector('#applicationType_chosen .active-result');

 
 // Retrieve and print the li elements with class active-result
 const values = await page.$$eval('#applicationType_chosen .active-result', (elements) => {
   return elements.map((element) => element.textContent?.trim()?? '');
 });

 console.log('Values:', values);
 console.log('value-length:',values.length)
 await page.waitForTimeout(3000);
 //await page.locator('#applicationType_chosen').getByText(values[3], { exact: true }).click();
// Retrieve the current URL
const currentUrl = page.url();
// Create a new page instance with the current URL
await page.waitForTimeout(3000);
for(let i=0;i<3;i++)
{
  await page.goto(currentUrl);
}
await page.waitForTimeout(3000);


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
