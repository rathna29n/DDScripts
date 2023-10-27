import { Page } from "@playwright/test";

export default class BLSLoginPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get BLSUserid()
    {
        const username = this.page.locator("input[name='Username']");
        return username;
    }

    public get BLSPasswd()
    {
        const passwd = this.page.locator("input[name='Password']");
        return passwd;
    }

    public get LogonBtn()
    {
        const LogonBtn = this.page.locator("input[value='Log On']");
        return LogonBtn;
    }
    public async enterUsername (name: string){
        const ele = await this.BLSUserid;
        await ele?.fill(name);
    }

    public async enterPasswd (pass: string){
        const ele1 = await this.BLSPasswd;
        await ele1?.fill(pass);
    }

    public async Logonbtnclk (){
        const ele2 = await this.LogonBtn;
        await ele2?.click();
}
}