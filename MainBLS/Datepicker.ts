import { test, expect } from '@playwright/test';
import {DateTime} from 'luxon';
test('test', async ({ page }) => {
  await page.goto('https://www.brighterlawsuite-staging.co.uk/account/logon?ReturnUrl=%2fcases%2fdetails%2f758441');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('Turneruser');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Test1234');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('tab', { name: 'Transaction Details' }).click();
  const date_to_pick = addDaysToDate(2);
   console.log('date_pick:::::'+date_to_pick);
   await page.getByText('Milestone Date').isVisible();
 await page.waitForSelector('(//li[@class="action"]//button)[1]', { state: 'visible' });
 await page.locator('(//li[@class="action"]//button)[1]').isVisible();
 await page.locator('(//li[@class="action"]//button)[1]').click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).click();
 await page.getByRole('textbox', { name: 'Milestone Date (Required)' }).nth(1).fill(date_to_pick);
 await page.click('body');
 //await page.waitForTimeout(3000);
 //(//li[contains(text(),"Complete")])[2]
 await page.waitForSelector('(//li[@class="action"]//button)[3]', { state: 'visible' });
 await page.locator('(//li[@class="action"]//button)[3]').isVisible();
 await page.locator('(//li[@class="action"]//button)[3]').click();
 //await page.waitForTimeout(5000);

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
 //Print Invoice Date
 let InvoiceDate: string | null;
 InvoiceDate = await page.locator("(//div[@class='date col-sm-4']/following-sibling::div)[3]").textContent();
 console.log("InvoiceDate:" + InvoiceDate);
//Print Invoice Total
let InvoiceTotal: string | null;
InvoiceTotal = await page.locator("(//div[@class='user col-sm-4'])[2]").textContent();
console.log("InvoiceTotal:" + InvoiceTotal);
 
 function addDaysToDate(daysToAdd: number): string {
    const date = DateTime.local().plus({ days: daysToAdd });
    return date.toFormat('dd/MM/yyyy');
  }
  
    

});