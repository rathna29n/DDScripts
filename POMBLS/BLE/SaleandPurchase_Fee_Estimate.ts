import { expect, Locator, Page } from "@playwright/test";


export default class SandPFeeEstimate {
private page: Page;

    readonly  feeestimatehdr: Locator;
    readonly  FeeEstbelow: Locator;
    readonly  propprice: Locator;
    readonly profcharges: Locator;
    readonly vat: Locator;
    readonly net: Locator;
    readonly gross: Locator;
    readonly saletotal: Locator;

    readonly  purchfeeheader: Locator;
    readonly  purchpfchrgs: Locator;
    readonly  tpdisbursmnt: Locator;
    readonly  sdlt: Locator;
    readonly  purchtotl: Locator;
    readonly  newestbtn: Locator;
    readonly  amendbtn: Locator;
    readonly  prntest: Locator;
    readonly  instrctus: Locator;

    readonly slnetval: Locator;
    readonly slvatval: Locator;
    readonly slgrossval: Locator;


constructor(page: Page){
        this.page = page;
        this.feeestimatehdr = page.locator("//h1[text()='Your Fee Estimate']");
        this.FeeEstbelow = page.locator("//div[text()='Please find your Fee Estimate below. A copy to keep and print has been emailed to you.']");
        this.propprice = page.locator("//p[text()='Sale Fees, based on property price of £200']");
        this.profcharges = page.locator("(//td[text()='Professional Charges'])[1]");
        this.net = page.locator("(//td[text()='Professional Charges']/following-sibling::td)[1]");
        this.vat = page.locator("(//td[text()='Professional Charges']/following-sibling::td)[2]");
        this.gross = page.locator("(//td[text()='Gross'])[2]");
        this.saletotal = page.locator("(//td[text()='Sale Total']/following-sibling::td)[3]");
        this.purchfeeheader = page.locator("//*[contains(text(),'Sale Fees, based on property price of')]");
        this.tpdisbursmnt = page.locator("(//td[text()='Third Party Disbursements'])[2]");
        this.sdlt = page.locator("(//td[text()='SDLT']/following-sibling::td)[3]");
        this.purchtotl = page.locator("//td[text()='Purchase Total']");
        this.newestbtn = page.locator("//a[contains(text(),'New Estimate')]");
        this.amendbtn = page.locator("//a[contains(text(),'Amend')]");
        this.prntest = page.locator("//a[contains(text(),'Print Estimate')]");
        this.instrctus = page.locator("//a[contains(text(),'Instruct Us')]");
        this.slnetval = page.locator("(//td[@class='text-right ng-binding'])[1]");
        this.slvatval = page.locator("(//td[@class='text-right ng-binding'])[2]");
        this.slgrossval = page.locator("(//td[@class='text-right ng-binding']/following-sibling::td)[2]");
        
    }

     async getSaleNetValue() {
        let ref: string | null;
        ref = await this.slnetval.textContent();
        return ref;
    }

    async getSaleVatValue() {
        let vat: string | null;
        vat = await this.slvatval.textContent();
        return vat;
    }

    async getSaleGrossValue() {
        let gross = await this.slgrossval.textContent();
        return gross;
    }

    async TC1_1_Step1_VerifysalefeeEstimate()
    {
        await this.feeestimatehdr.isVisible();
        await this.FeeEstbelow.isVisible();
        await this.propprice.isVisible();
        await this.profcharges.isVisible();
        await this.net.isVisible();
        await this.vat.isVisible();
        await this.gross.isVisible();
        await this.saletotal.isVisible();  
    }
    async TC1_1_Step1_VerifypurchfeeEstimate()
    {
        await this.purchfeeheader.isVisible();
        await this.tpdisbursmnt.isVisible();
        await this.sdlt.isVisible();
        await this.purchtotl.isVisible();
        await this.newestbtn.isVisible();
        await this.amendbtn.isVisible();
        await this.prntest.isVisible();
        await this.instrctus.isVisible();
        let expect_netval='£26.00';
        let netval = await this.getSaleNetValue();
        expect(expect_netval).toBe(netval); 
        let expect_vatval = '£5.20';
        let vatval = await this.getSaleVatValue();
        expect(expect_vatval).toBe(vatval);
        let expect_grossval = '£31.20';
        let grossval = await this.getSaleGrossValue();
        expect(expect_grossval).toBe(grossval);
        await this.instrctus.click(); // it will go to next page ... i.e instruct us page..
        //* let netval = await this.getSaleNetValue();
       // console.log("Sale Net Value is " + netval)
        //let vatval = await this.getSaleVatValue();
        //console.log("Sale VAT Value is " + vatval);
        //let grossval = await this.getSaleGrossValue();
       // console.log("Sale Gross Value is " + grossval); //*/// these lines will wait until you get values for netval,vatval & grossval
        // from instruct us page... since we have 30000 ms as timeout, it is waiting and timing out with error
    }
    
}