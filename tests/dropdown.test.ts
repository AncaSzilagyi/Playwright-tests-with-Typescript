import { test } from "@playwright/test"

test("Handling dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        // value: "Friday"
        index: 3
    });
    await page.waitForTimeout(3000);
    await page.selectOption('#multi-select', [{
        label: "Texas"
    }, {
        index: 2
    }, {
        value: "Washington"
    }])
})

test("Bootstrap dropdown", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');

    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("New Zealand");

    async function selectCountry(countryName) {
        await page.click("#country+span");
        await page.locator('ul#select2-country-results')
            .locator("li", {
                hasText: countryName
            }).click();
    }
})