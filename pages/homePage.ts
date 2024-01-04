import { Page } from "@playwright/test"
export default class HomePage {
    public editAccountBtn: string;
    public changePasswordBtn: string;
    public modifyAddressBookBtn: string;
    public modifyWishListBtn: string;
    public subscribeBtn: string;
    constructor(public page: Page) {
        this.editAccountBtn = "//a[contains(text(),' Edit your account information')]";
        this.changePasswordBtn = "//a[contains(text(),' Change your password')]";
        this.modifyAddressBookBtn = "//a[contains(text(),' Modify your address book entries')]";
        this.modifyWishListBtn = "//a[contains(text(),' Modify your wish list')]";
        this.subscribeBtn = "//a[contains(text(),' Subscribe / unsubscribe to newsletter')]";
    }
    async clickOnSpecialHotMenu() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            await this.page.click("//ul[@class='navbar-nav horizontal']/li/a/div/span[contains(text(),'Special')]")
        ])
    }
    async clickEditAccountInfo(){
        await this.page.click(this.editAccountBtn);
    }
    async clickChangePassword(){
        await this.page.click(this.changePasswordBtn);
    }
    async clickModifyAddress(){
        await this.page.click(this.modifyAddressBookBtn);
    }
    async clickModifyWishList(){
        await this.page.click(this.modifyWishListBtn);
    }
    async clickSubscribe(){
        await this.page.click(this.subscribeBtn);
    }
    async hoverMyAccount(){
        await this.page.hover("//span[contains(text(),'My Account')]");
    }
    async logout(){
        await this.page.click("//a[contains(text(),'Logout')]");
        // await this.page.click("//span[contains(text(),'Logout')]");
    }





}