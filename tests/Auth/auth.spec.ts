import { Routes, baseURL, User } from '@/consts';
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

test('login test without signup', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.getByPlaceholder('Email').fill(User.email);
  await page.getByPlaceholder('Password').fill(User.password);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForURL(Routes.DASHBOARD);
  expect(page.url()).toBe(baseURL + Routes.DASHBOARD);
  expect(await page.getByRole('button', { name: 'Logout' }).textContent()).toBe(
    'Logout',
  );
});
