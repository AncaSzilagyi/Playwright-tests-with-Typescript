import { expect, test, _baseTest } from "@playwright/test";

test("handling alerts", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');


    page.on("dialog", async (alert) => {
        const text = await alert.message();
        console.log(text);
        await alert.dismiss();
    })

    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
})

test("Bootstrap Modals", async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("//button[contains(text(), 'Launch Modal')]").nth(0).click();
    await page.click("(//button[text()='Save Changes'])[1]");
})

