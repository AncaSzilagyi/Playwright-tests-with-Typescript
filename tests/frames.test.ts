import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No of frames: " + allFrames.length);

    //First way to assert:

    // const myFrame = page.frame("firstFr");
    // var firstName = "Elisa";
    // await myFrame?.fill("input[name='fname']", firstName);
    // //question mark considers the case
    // //where there is no frame
    // var lastName = "test";
    // await myFrame?.fill("input[name='lname']", lastName);
    // expect(await myFrame?.locator("//p[@class='title has-text-info']").textContent()).toContain('You have entered ' + firstName + " " + lastName);

    //Second way to assert:

    const myFrame = page.frameLocator("#firstFr");
    await myFrame.locator("input[name='fname']").fill("Elisa"); 
    await myFrame.locator("input[name='lname']").fill("test");

    const innerFrame = myFrame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='lname']").fill("elisa@test.com");


    await page.waitForTimeout(3000);
})