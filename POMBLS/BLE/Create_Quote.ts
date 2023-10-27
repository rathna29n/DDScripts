import { expect, Locator, Page } from "@playwright/test";


export default class BLSEstimatePage{
    private page: Page;
    readonly convestimate: Locator;
    readonly gobtn: Locator;
    readonly headerpg: Locator;
    readonly verifyretrieveestimate: Locator;

constructor(page: Page){
        this.page = page;
        this.convestimate = page.locator("//h4[text()='Instant Conveyancing Estimate']");
        this.gobtn = page.locator("(//span[contains(@class,'btn btn-primary')])[1]");
        this.headerpg = page.locator("//h1[text()='What Would You Like to Do?']");
       // this.page.pause();
    }
  
    async verifyheader()
    {
        await expect(this.convestimate.isVisible());          
    } 
    
    async getheaderInfo() {
        let ref: string | null;  // var ref;
        ref = await this.convestimate.textContent();
        return ref;
    }

    async gobtnclk()
     {
        await this.gobtn.click(); // on clicking button-[1] .. page will navigate to somewehere...
        //await expect(this.page2.sample.isvisible())
        this.page.waitForTimeout(4000);
    }

    async TC_1_1_VerifyHeaders()
    {
        await this.convestimate.isVisible();
    let hdrinfo = await this.getheaderInfo(); // hdrinfo will get either string or null
    console.log(hdrinfo);
    return hdrinfo;
        
    }
    async TC_1_2_VerifyGobuttonClick()
    {
        await this.gobtn.isVisible();
        await this.gobtn.click();
        
    }
    
    async waitForTimeout(t) { // t:number
        await this.page.waitForTimeout(t);

    }
}

//wait\for\timeout(1000) .. hello,,, personn, true,34.555