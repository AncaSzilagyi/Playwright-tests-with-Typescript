import { chromium, webkit, firefox, test } from '@playwright/test';

test('Meetup examples', async ({ page }) => {
    for (const browserType of [chromium, webkit, firefox]) {
        const browser = await browserType.launch();
        // minimize launching browsers, that's why we use context!
        const page = await browser.newPage();
        //you use context for many pages in the same browser
        await page.goto('https://www.meetup.com');
        await page.screenshot({
            path: `screenshots/${browserType.name()}.png`
        });
        await browser.close();
    }
});