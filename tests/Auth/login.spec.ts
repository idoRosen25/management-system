import { Routes, baseURL } from '@/consts';
import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto(Routes.AUTH);

  // Expect a title "to contain" a substring.
  await page.getByPlaceholder('Email').fill('may74@gmail.com');
  await page.getByPlaceholder('Password').fill('123123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForURL(Routes.DASHBOARD);
  expect(page.url()).toBe(baseURL + Routes.DASHBOARD);
  expect(await page.getByRole('button', { name: 'Logout' }).textContent()).toBe(
    'Logout',
  );
});

test('signup test without login', async ({ page }) => {
  await page.goto(Routes.INVITE);

  await page.getByPlaceholder('admin Email').fill('may74@gmail.com');
  await page.getByPlaceholder('Team Name').fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();
});
