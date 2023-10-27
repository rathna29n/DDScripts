import  { test, Page, expect } from "@playwright/test";
import Envbls from "../Utilities/BLS_environment";
import BLSEstimatePage from "../POMBLS/BLE/Create_Quote";
import SaleandPurchase from "../POMBLS/BLE/Sale_purchase_Quote";
import SandPFeeEstimate from "../POMBLS/BLE/SaleandPurchase_Fee_Estimate";
import InstructUsPg from "../POMBLS/BLE/Fee_InstructUs";
import RetrieveEstimate from "../POMBLS/BLE/Retrieve_Estimate";
import ActiveCaseSearch from "../POMBLS/ActiveCaseSearch";

    let page: Page; // var page;

    let blsestimate: BLSEstimatePage;
    let saleandpurchasepg: SaleandPurchase;
    let feeestpg: SandPFeeEstimate;
    let Instructus: InstructUsPg;
    let retestpg: RetrieveEstimate;
    let activeCaseSearch: ActiveCaseSearch;
         
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
        blsestimate = new BLSEstimatePage(page);
        saleandpurchasepg = new SaleandPurchase(page);
        feeestpg = new SandPFeeEstimate(page);
        Instructus = new InstructUsPg(page);
        retestpg = new RetrieveEstimate(page);
        //activeCaseSearch = new ActiveCaseSearch(page);

        await page.goto(Envbls.stagingbls);
  });
      

  test ("UKP-T206, 207, 208 - Retrieve and Instruct functionality of an Open Case", async () => {
   
    //await page.goto('https://www.brighterlawsuite-staging.co.uk/Account/LogOn');
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
}) 
 


