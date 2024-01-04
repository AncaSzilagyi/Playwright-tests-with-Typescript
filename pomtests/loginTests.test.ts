import { expect, test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
// import myAccount from '../pages/myAccountInfoPage';

const email = "testElisa02@mailinator.com";
const password = "testPassword";
test.describe("Login tests", async () => {
    test("Login | test_01", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        await expect(page.locator("//h2[@class='card-header h5']").nth(0)).toHaveText("My Account");
    })
    test("Login with invalid email | test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const randomEmail = "test" + login.generateRandomNumber(3, 100) + "Elisa" + login.generateRandomNumber(3, 1000) + "@mailinator.com";
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(randomEmail);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toHaveText(" Warning: No match for E-Mail Address and/or Password.");
    })
    test("Check page elements | test_03", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        expect(await page.locator(login.getLoginTitleBox())).toHaveText("Returning Customer");
        expect(await page.locator(login.getEmailLocator()).getAttribute('placeholder')).toEqual("E-Mail Address");
        expect(await page.locator(login.getPasswordLocator()).getAttribute('placeholder')).toEqual("Password");
    })
    test("Login with invalid password | test_04", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const randomPassword = "test" + login.generateRandomNumber(3, 100);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(randomPassword);
        await login.clickLoginBtn();
        await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toHaveText(" Warning: No match for E-Mail Address and/or Password.");
    })

})

