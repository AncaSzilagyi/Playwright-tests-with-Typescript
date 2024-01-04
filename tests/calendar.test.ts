import { test, _baseTest } from "@playwright/test";

test("Calendar demo using fill function", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1994-12-04";
    await page.fill("id=birthday", date);
    await page.waitForTimeout(3000);
})

// test("Calendar demo using moment", async ({page}) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
//     await page.click("//input[@placeholder='Start date']");
// })