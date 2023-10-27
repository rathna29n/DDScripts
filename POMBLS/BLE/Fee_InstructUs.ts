import { expect, Locator, Page } from "@playwright/test";


export default class InstructUsPg {
private page: Page;

    readonly  instusheadr: Locator;
    readonly  urdetailshdr: Locator;
    readonly  entrfstname: Locator;
    readonly fstnmplcholder: Locator;
    readonly lstname: Locator;
    readonly mobnumbr: Locator;
    readonly email: Locator;
    readonly selectadrs: Locator;
    readonly town: Locator;
    readonly county: Locator;
    readonly pstcode: Locator;
    readonly town1: Locator;
    readonly county1: Locator;
    readonly pstcode1: Locator;


    readonly sladrhdr: Locator;
    readonly entrpostcd: Locator;
    readonly pickadres: Locator;
    readonly pchsadrshdr: Locator;
    readonly entrpurchpcd: Locator;
    readonly  pckpurchadrs: Locator;
    readonly  instclk: Locator;
constructor(page: Page){
        this.page = page;
        this.instusheadr = page.locator("//h1[text()='INSTRUCT US']");
        this.urdetailshdr = page.locator("//form[@name='saveDetail']/div[1]/div[1]/div[1]/p[1]");
        this.fstnmplcholder = page.locator("//span[text()='Please enter your first name.']")
        this.entrfstname = page.locator("input[name='firstname']");
        this.lstname = page.locator("//input[@ng-model='client.lastname']");
        this.mobnumbr = page.locator("//input[@ng-model='client.telephone']");
        this.email = page.locator("(//input[@name='email'])[1]");
        //this.selectadrs = page.locator("//div[text()[normalize-space()='3 Ainsdale Crescent Reading, RG30 3NG']]")
        this.town = page.locator("input[ng-model='saleService.caseServiceAddress.town']");
        this.county = page.locator("input[ng-model='saleService.caseServiceAddress.county']");
        this.pstcode = page.locator("input[ng-model='saleService.caseServiceAddress.postcode']");

        

        this.sladrhdr = page.locator("//div[@ng-class='{disabled : !sale}']//p[1]");
        this.entrpostcd = page.locator("//input[@ng-model='saleService.addressSearch']");
        this.pickadres = page.locator("//div[text()[normalize-space()='3 Ainsdale Crescent Reading, RG30 3NG']]");

        this.pchsadrshdr = page.locator("//div[@ng-class='{disabled : !purchase}']//p[1]");
        this.entrpurchpcd = page.locator("//input[@ng-change='caseServiceAddressLookup(purchaseService)']");
        this.pckpurchadrs = page.locator("//div[text()[normalize-space()='192 Oxford Road Reading, RG30 1AA']]");
        this.town1 = page.locator("input[ng-model='saleService.caseServiceAddress.town']");
        this.county1 = page.locator("input[ng-model='saleService.caseServiceAddress.county']");
        this.pstcode1 = page.locator("input[ng-model='saleService.caseServiceAddress.postcode']");
        this.instclk = page.locator("//button[text()[normalize-space()='Instruct']]"); 
    }


    async 
    async TC1_1_Step1_VerifyInstructusPg()
    {
        await this.instusheadr.isVisible();
        await this.urdetailshdr.isVisible();
        await this.entrfstname.click();
     // await this.entrfstname.clear();
      await this.entrfstname.fill('BLEtest');
      await expect(this.lstname).not.toBeEmpty();
      await expect(this.mobnumbr).not.toBeEmpty();
      await expect(this.email).not.toBeEmpty(); 
    }
    async TC1_1_Step2_VerifySaleaddress()
    {
        await this.sladrhdr.isVisible();
        await this.entrpostcd.click();
        await this.entrpostcd.fill('RG30 3NG');
        await this.pickadres.click();
       // await this.urdetailshdr.isVisible();
        await expect(this.town).not.toBeEmpty();
        await expect(this.county).not.toBeEmpty();
        await expect(this.pstcode).not.toBeEmpty();
    }

    async TC1_1_Step3_VerifyPurchsaddress()
    {
        await this.pchsadrshdr.isVisible();
        await this.entrpurchpcd.click();
        await this.entrpurchpcd.fill('RG30 1AA');
        await this.pckpurchadrs.click();
        await expect(this.town1).not.toBeEmpty();
        await expect(this.county1).not.toBeEmpty();
        await expect(this.pstcode1).not.toBeEmpty();
        await this.page.waitForTimeout(2000);
        await this.instclk.click();
    
    }
}