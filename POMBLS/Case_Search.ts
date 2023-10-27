import { Page } from "@playwright/test";

export default class CaseSearch{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }
    public get CaseSearchbtn()
    {
        const CaseSearchbtn = this.page.locator("//a[contains(text(),'Track Active Cases')]");
        return CaseSearchbtn;
    }

    public get SearchTerm()
    {
        const SearchTerm = this.page.locator("//input[@ng-model='filterBy.searchTerm']");
        return SearchTerm;
    }
   
    public async CaseSearchclk(){
        const casesrchclk = await this.CaseSearchbtn;
        await casesrchclk?.click();
}

public async SearchTermclk(){
    const searchtermclk = await this.SearchTerm;
    await searchtermclk?.click();
}
}