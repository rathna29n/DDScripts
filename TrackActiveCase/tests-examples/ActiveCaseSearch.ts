import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
 await page.goto('https://www.brighterlawsuite-staging.co.uk/Account/LogOn');
 await page.getByLabel('Username').click();
 await page.getByLabel('Username').fill('TurnerUser');
 await page.getByLabel('Username').press('Tab');
 await page.getByLabel('Password').fill('Test1234');
 await page.getByLabel('Password').press('Enter');
 await page.getByRole('link', { name: ' Track Active Cases' }).click();
 await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').click();
 await page.getByPlaceholder('Case Number, Postcode, First Line Of Address, Surname').fill('756428');
 await page.getByRole('button', { name: ' SEARCH' }).click();
 await expect(page.getByRole('cell', { name: 'Purchase' })).toHaveCount(1);
 await expect(page.getByRole('cell', { name: 'Sale' })).toHaveCount(1);
 await page.getByRole('row', { name: '756428 Jul 5, 2021 Lname 192 Oxford Road, RG3... Purchase Fredrick Turner (Turner and Turner, Yorkminster) MarinaTNT Tchechmedjieva TNT Sam TEsting (Turner and Turner, Yorkminster) Jul 5, 2021 Active Case' }).getByRole('cell', { name: '756428' }).click();
 await page.getByRole('tab', { name: 'Transaction Details' }).click();

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
});