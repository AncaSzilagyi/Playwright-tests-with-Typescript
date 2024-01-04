import { expect, test } from '@playwright/test';
import RegisterPage from '../pages/registrationPage';
import LoginPage from '../pages/loginPage';
import SpecialHotPage from '../pages/specialHotPage';
import HomePage from '../pages/homePage';

const email = "testElisa06@mailinator.com";
const password = "testPassword";
test.describe("Page object test demo", async() => {
    test("Register test_01", async ({ page, baseURL }) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Elisa");
        await register.enterLastName("test");
        await register.enterEmail(email);
        await register.enterTelephone("1234570");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        // await expect(register.isSubscribedChecked()).toBeChecked();
        await register.clickTermsAndConditions();
        await register.clickContinueToRegister();
    
    })
    
    test("Login test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })
    
    //todo create some tests for error login (email and wrong password, or email without pass)
    
    test("Add to cart test_03", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        await homePage.clickOnSpecialHotMenu();
        await special.addFirstProductToCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();
    })
})