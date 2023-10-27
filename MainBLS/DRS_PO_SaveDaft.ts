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
await page.getByPlaceholder('Start Typing...').fill('RG1 3PQ');
await page.waitForTimeout(3000);
await page.getByRole('button', { name: '34 Liverpool Road, READING, Berkshire, RG1 3PQ' }).click();
await page.locator('#reference').click();
await page.locator('#reference').fill(newly_created_id);
await page.getByRole('button', { name: ' Continue' }).click();
await page.waitForTimeout(3000);
//Enter Application Details.....
await page.locator('application-details span').nth(1).click();
await page.locator('a').filter({ hasText: 'Select an Option' }).click();
await page.getByRole('listitem').filter({ hasText: 'Document Registration' }).click();
await page.locator('#applicationType_chosen').getByRole('textbox').click();
await page.locator('#applicationType_chosen').getByText('Charge', { exact: true }).click();
await page.getByRole('button', { name: ' Continue' }).click();
await page.getByRole('button', { name: ' Continue' }).click();
await page.locator('a').filter({ hasText: 'Select an Option' }).first().click();
await page.getByRole('listitem').filter({ hasText: 'Original' }).click();
await page.waitForTimeout(3000);
//Click on Save as draft button
await page.getByRole('button', { name: ' Save Draft' }).click();
const order_saved_alert=(await page.waitForSelector("//div[text()='Order Saved']", { state: 'visible' })).isVisible();
order_saved_alert.then((is_visible) => {
  console.log("Is the 'Order Saved' element visible? " + is_visible);
})
  /*  const order_saved_alert = await page.waitForSelector("//div[text()='Order Saved']", { state: 'visible' });
const is_visible = await order_saved_alert.isVisible();
console.log("Is the 'Order Saved' element visible? " + is_visible);  */

await page.getByRole('link', { name: 'View Orders' }).click();
await page.getByPlaceholder('Case Number, Postcode, Street Name').click();
await page.getByPlaceholder('Case Number, Postcode, Street Name').fill(newly_created_id);
await page.getByRole('button', { name: ' SEARCH' }).click();
await page.waitForTimeout(2000);
console.log('search value::'+await page.locator("(//span[@title='Post Completion']/following-sibling::span)[2]").innerText());
await page.locator("(//span[@title='Post Completion']/following-sibling::span)[2]").click();


await page.getByRole('link', { name: 'Edit ' }).click();
await page.getByRole('button', { name: ' Continue' }).click();
await page.getByRole('button', { name: ' Continue' }).click();


await page.waitForTimeout(3000);
});
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