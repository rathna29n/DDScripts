import { expect, Locator, Page } from "@playwright/test";


export default class RetrieveEstimate {
private page: Page;

    readonly  tyheader: Locator;
    readonly uresthdr: Locator;
    readonly  getcasenum: Locator;
    readonly entrref: Locator;
    readonly  email: Locator;
    readonly fstnmplcholder: Locator;
    readonly lstname: Locator;

constructor(page: Page){
        this.page = page;
        this.tyheader = page.locator("//h1[text()='THANK YOU FOR YOUR INSTRUCTION']");
        this.uresthdr =  page.locator("//h2[text()='Your Estimate']");
        this.getcasenum = page.locator("//th[text()='Our Ref']/following-sibling::td");
        this.entrref = page.locator("//label[text()='Reference Number']/following-sibling::input");
    }


    async getCasenumbr(){
      let cnum: string | null;
      
      cnum = await this.getcasenum.textContent();
      return cnum;
    }
async entercasenumber(cnm)
{
  await this.entrref.click();
  await this.entrref.fill(cnm);
  return cnm;
}
        
        
    async TC1_1_Step1_VerifyRetestPg()
    {
     
        await this.tyheader.isVisible();
        await this.uresthdr.isVisible();
        let refnumbr = await this.getCasenumbr();
        console.log(refnumbr);
        await this.entercasenumber(refnumbr);
       
     
    }
    
}