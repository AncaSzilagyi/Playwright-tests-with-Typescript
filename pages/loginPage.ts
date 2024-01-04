import { Page } from "@playwright/test"
export default class LoginPage {
    public editAccountInfoLocator: string;
    public continueBtnLocator: string;
    public loginTitleLocator: string;
    public emailInputLocator: string;
    public passwordInputLocator: string;
    constructor(public page: Page) {
        this.editAccountInfoLocator = "//a[contains(text(),' Edit your account information')]";
        this.continueBtnLocator = "//input[@value='Continue']";
        this.loginTitleLocator = "//h2[contains(text(),'Returning Customer')]";
        this.emailInputLocator = "//input[@name='email']";
        this.passwordInputLocator = "//input[@name='password']";

    }
    getLoginTitleBox() {
        return this.loginTitleLocator;
    }
    getEmailLocator() {
        return this.emailInputLocator;
    }
    getPasswordLocator() {
        return this.passwordInputLocator;
    }
    generateRandomNumber(minimum: number, maximum: number) {
        minimum = Math.ceil(minimum);
        maximum = Math.floor(maximum);
        return (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum).toString();

    }
    // todo to put all the general functions in another class
    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
        // await this.page.click("//input[@value='Login']");

    }
    async enterEmail(email: string) {
        await this.page.type(this.emailInputLocator, email, { delay: 50 })
    }
    async enterLoginPassword(password: string) {
        await this.page.type("//input[@name='password']", password, { delay: 50 })

    }

    //todo write test case for Forgotten Password link 

    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'networkidle' }),
            await this.page.click("//input[@value='Login']")
        ])
    }

    async clickEditAccountBtn() {
        await this.page.click(this.editAccountInfoLocator);
    }



}