import { expect, test } from "@playwright/test";


test("Check first input field", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("//input[@id='user-message']");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log(await messageInput.inputValue());

    await messageInput.type("Hi, Elisa!");
})

test("Check sum - input field", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const firstAttribute = page.locator("//input[@id='sum1']");
    const secondAttribute = page.locator("//input[@id='sum2']");
    const getValuesButton = page.locator("//button[contains(text(), 'Get values')]");

    expect(firstAttribute).toHaveAttribute("placeholder", "Please enter your Message");
    expect(secondAttribute).toHaveAttribute("placeholder", "Please enter your Message");

    let num1 = 142342;
    let num2 = 345353;
    await firstAttribute.type("" + num1);
    await secondAttribute.type("" + num2);
    await getValuesButton.click();

    const result = page.locator("#addmessage");
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult); //like getText() in Selenium;

})

test("Interact with checkboxes", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const firstCheckbox = page.locator('#isAgeSelected');
    expect(firstCheckbox).not.toBeChecked();
    await firstCheckbox.check();
    expect(firstCheckbox).toBeChecked();
    const result = page.locator('#txtAge');
    expect(result).toHaveText('Success - Check box is checked');


})