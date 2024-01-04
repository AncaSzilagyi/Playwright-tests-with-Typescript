import { test, expect } from '@playwright/test';

test("should match a snapshot", async ({ page }) => {
    //page is isolted from this test
    await page.goto('http://www.meetup.com');
    await page.screenshot({ path: 'someName.png' });
    expect(await page.screenshot()).toMatchSnapshot('search.png', {
        threshold: 0.3
    });
});