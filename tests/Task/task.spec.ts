import { Routes } from '@/consts';
import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto(Routes.AUTH);
});
