import { expect, Locator, Page } from "@playwright/test";
export default class SaleandPurchase {
private page: Page;
    readonly headerurcnvestmte: Locator;
    readonly selectsaleandpurchase: Locator;
    readonly entersaleprice: Locator;
    readonly postcodelabel: Locator;
    readonly purchspostcode: Locator;
    readonly enterpurchaseprice: Locator;
    readonly clkfindlocalauth: Locator;
    readonly picktitle: Locator;
    readonly titlename: Locator;
    readonly enterlastname: Locator;
    readonly enteremail: Locator;
    readonly enterphonenumber: Locator;
    readonly clknext: Locator;
    readonly Aceptprivacypolicy: Locator;
    readonly vrfysalepricelabel: Locator;

    readonly  feeestimatehdr: Locator;
    readonly  FeeEstbelow: Locator;
    readonly  propprice: Locator;
    readonly profcharges: Locator;
    readonly vat: Locator;
    readonly net: Locator;
    readonly gross: Locator;
    readonly saletotal: Locator;

    readonly  purchfeeheader: Locator;




constructor(page: Page){
        this.page = page;
        this.headerurcnvestmte = page.locator("//h1[text()='Your Conveyancing Estimate']");
        this.selectsaleandpurchase = page.locator("(//input[contains(@class,'ng-valid ng-valid-required')])[3]");
        this.vrfysalepricelabel = page.locator("(//label[@class='ng-binding'])[1]");
        this.entersaleprice = page.locator("//input[@ng-model='salePrice']");
        this.postcodelabel = page.locator("//label[@for='postcode']");
        this.purchspostcode = page.locator("(//label[text()='Purchase Postcode']/following::input)[1]");
        this.enterpurchaseprice = page.locator("//input[@ng-model='purchasePrice']");
        this.clkfindlocalauth = page.locator("//a[@class='ng-binding']//i[1]");
        this.picktitle = page.locator("select[ng-model='title']");
        this.titlename = page.locator("//option[@label='Mrs']");
        this.enterlastname = page.locator("input[name='lastname']");
        this.enteremail = page.locator("input[ng-model='email']");

        this.enterphonenumber = page.locator("input[name='phone']");
        this.clknext = page.locator("(//button[@type='submit'])[1]");
        this.Aceptprivacypolicy = page.locator("//button[text()[normalize-space()='Accept Privacy Policy']]");
    }

    async TC1_1_Step1_ClkSaleandPurchase()
    {
        await this.selectsaleandpurchase.isVisible();
        await this.selectsaleandpurchase.click();
    }

    async TC1_1_Step2_VerifySalePricelabel()
    {
        await this.vrfysalepricelabel.isVisible();
        await this.entersaleprice.isVisible();
        await this.entersaleprice.type('100')
        await this.postcodelabel.isVisible();
        await this.purchspostcode.type('RG30 3NG');
        await this.clkfindlocalauth.click();
        await this.enterpurchaseprice.type('200000');
  
     }

    async TC1_1_Step3_VerifyYourdetails()
    {
        await this.picktitle.isVisible();
         await this.picktitle.click();
         await this.titlename.isVisible();
         await this.titlename.press("ArrowDown");
         await this.titlename.press("ArrowDown");

         await this.titlename.press("ArrowDown");
        await this.titlename.press("Enter"); 
      
        await this.enterlastname.click();
        //await this.titlename.clear;
        await this.enterlastname.fill('testln');
        //await this.enteremail.isVisible();
        await this.enteremail.click();
        await this.enteremail.fill('jasmine.ravi@dyedurham.com');
        //await this.enterphonenumber.isVisible();
        await this.enterphonenumber.click();
        await this.enterphonenumber.fill('07918300123');
        await this.clknext.isVisible();
        await this.clknext.click();
        await expect(this.Aceptprivacypolicy).toBeVisible();
        //await this.AceptPprivacypolicy.isVisible();
        await this.Aceptprivacypolicy.click();  

    }


}