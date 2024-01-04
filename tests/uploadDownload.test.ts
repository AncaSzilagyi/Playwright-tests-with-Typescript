import { test } from '@playwright/test';

test("Download files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.locator("#textbox").type("something");
    await page.click("//button[@id='create']");
    await page.screenshot();
    await page.click("#link-to-download");
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ]);
    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);
    // const path = await download[0].path();
    // console.log(path);
    //Downloaded files are deleted when the browser context that produced them is closed.

})

test.only("Upload file", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await page.setInputFiles("//input[@type='file']",
        ["itemsToUpload/dog.png", "itemsToUpload/bear.png"]);
        // these files are too large, but this is how you upload files

})