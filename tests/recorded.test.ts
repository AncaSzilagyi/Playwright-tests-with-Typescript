import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await (await page).hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");

  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('test_elisa@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('testPassword123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('First Name').click({
    clickCount: 3
  });
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('E');
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('Something else');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: ' My account' }).click();
  await (await page).hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");

  await page.locator('#widget-navbar-217834').getByRole('link', { name: 'Logout' }).click();
});