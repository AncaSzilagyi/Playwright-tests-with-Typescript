import { expect, test } from '@playwright/test';
import RegisterPage from '../pages/registrationPage';


const password = "testPassword";
test.describe("Register form tests", async () => {
    test("Full register | test_01", async ({ page, baseURL }) => {
        const register = new RegisterPage(page);
        const email = "testElisa" + register.generateRandomNumber(3, 1000) + "@mailinator.com";
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Elisa");
        await register.enterLastName("test");
        await register.enterEmail(email);
        await register.enterTelephone(register.generateRandomNumber(10000, 90000));
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        // await expect(register.isSubscribedChecked()).toBeChecked();
        await register.clickTermsAndConditions();
        await register.clickContinueToRegister();
        await expect(page.locator("//h1[@class='page-title my-3']")).toHaveText(" Your Account Has Been Created!");
    })
    test("Register with invalid inputs | test_02", async ({ page, baseURL }) => {
        const register = new RegisterPage(page);
        const email = "testElisa" + register.generateRandomNumber(3, 1000) + "@mailinator.com";
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Elisa");
        await register.enterLastName("This field will contain more than 32 charaters, as supposed.");
        await register.enterEmail(email);
        await register.enterTelephone(register.generateRandomNumber(10000, 90000)+"someLetters");
        //expected alert message here.
        await register.enterPassword(password);
        await register.enterConfirmPassword(password+"not the same password");
        await register.clickContinueToRegister();
        await expect(page.locator("//div[@class='text-danger']").nth(0)).toHaveText("Last Name must be between 1 and 32 characters!");
        await expect(page.locator("//div[@class='text-danger']").nth(1)).toHaveText("Password confirmation does not match password!");
        await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toHaveText(" Warning: You must agree to the Privacy Policy!");
    })
    test("Register with email that is already registered | test_03", async ({ page, baseURL }) => {
        const register = new RegisterPage(page);
        const email = "testElisa02@mailinator.com";
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Elisa");
        await register.enterLastName("test");
        await register.enterEmail(email);
        await register.enterTelephone(register.generateRandomNumber(10000, 90000));
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        await register.clickTermsAndConditions();
        await register.clickContinueToRegister();
        await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toHaveText(" Warning: E-Mail Address is already registered!");
    })

})

