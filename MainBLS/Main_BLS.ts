import { test, Page } from "@playwright/test";
import Envbls from "../Utilities/BLS_environment";
import BLSEstimatePage from "../POMBLS/BLE/Create_Quote";
import SaleandPurchase from "../POMBLS/BLE/Sale_purchase_Quote";
import SandPFeeEstimate from "../POMBLS/BLE/SaleandPurchase_Fee_Estimate";
import InstructUsPg from "../POMBLS/BLE/Fee_InstructUs";
import RetrieveEstimate from "../POMBLS/BLE/Retrieve_Estimate";

let page: Page; // var page;

let blsestimate: BLSEstimatePage;
let saleandpurchasepg: SaleandPurchase;
let feeestpg: SandPFeeEstimate;
let Instructus: InstructUsPg;
let retestpg: RetrieveEstimate;



test.beforeAll(async ({ browser }) => {
   page = await browser.newPage();
   await page.goto(Envbls.stagingblsestimate);

   await page.goto(Envbls.stagingblsestimate);


   blsestimate = new BLSEstimatePage(page);
   saleandpurchasepg = new SaleandPurchase(page);
   feeestpg = new SandPFeeEstimate(page);
   Instructus = new InstructUsPg(page);
   retestpg = new RetrieveEstimate(page);
});


test("UKP-T198 - Create Quote in BLEstimate", async () => {


   await blsestimate.TC_1_1_VerifyHeaders(); //string or null
   await blsestimate.TC_1_2_VerifyGobuttonClick();
   await page.waitForTimeout(2000);
})
test("UKP-T197-Enter Property address, Sale and Purchase Info", async () => {

   await saleandpurchasepg.TC1_1_Step1_ClkSaleandPurchase();
   await saleandpurchasepg.TC1_1_Step2_VerifySalePricelabel();
   await saleandpurchasepg.TC1_1_Step3_VerifyYourdetails();

   await page.waitForTimeout(4000);
})
test("UKP--Verify Fee Estimates for Sale and Purchase", async () => {

   await feeestpg.TC1_1_Step1_VerifysalefeeEstimate();
   await feeestpg.TC1_1_Step1_VerifypurchfeeEstimate();
   await page.waitForTimeout(4000);
})

test("UKP--Instruct Us page", async () => {

   await Instructus.TC1_1_Step1_VerifyInstructusPg();
   await Instructus.TC1_1_Step2_VerifySaleaddress();
   await Instructus.TC1_1_Step3_VerifyPurchsaddress();
   await page.waitForTimeout(5000);

})
test("UKP--Verify Retrieve Estimate", async () => {

   await retestpg.TC1_1_Step1_VerifyRetestPg();
   await page.waitForTimeout(4000);


});


