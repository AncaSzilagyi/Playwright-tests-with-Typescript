import { expect, test } from "@playwright/test";

test("Interact with multiple tabs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());

    const [multiplePages] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ]);
    await page.waitForLoadState();

    const pages = multiplePages.context().pages(); //gives all the pages.
    console.log("No. of tabs is: " + pages.length);

    pages.forEach(tab => {
        console.log(tab.url())
    })

    let facebookPage;
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
    }

    const text = await facebookPage.textContent("//h1");
    console.log(text);

    // await pages[1].fill("", "elisa");
    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("'Follow On Twitter'")
    // ]);

    // console.log(newWindow.url());
})