import { Routes, baseURL } from '@/consts';
import { test, expect } from '@playwright/test';
import { pauseExecution } from '@/utils/axios';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
  await page.getByPlaceholder('Email').fill('may74@gmail.com');
  await page.getByPlaceholder('Enter password again').fill('123123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForURL(Routes.DASHBOARD);
  expect(page.url()).toBe(baseURL + Routes.DASHBOARD);
});

test('task creation test', async ({ page }) => {
  await page.getByRole('button', { name: 'Create task' }).click();
  await page.getByPlaceholder('title').fill('test task');
  await page.getByPlaceholder('Assignee email').fill('may74@gmail.com');
  await page.getByPlaceholder('Description').fill('test description');
  await page.getByRole('button', { name: 'Create' }).last().click();
  await page.waitForURL(Routes.DASHBOARD);
  expect(page.url()).toBe(baseURL + Routes.DASHBOARD);
});

test('task edit test', async ({ page }) => {
  await page.getByText('→').first().click();
  await page.getByPlaceholder('Title').fill('test edit task');
  await page.getByPlaceholder('Description').fill('test edit description');
  await page.getByPlaceholder('Assignee').fill('may74@gmail.com');
  await page.getByRole('button', { name: 'Edit task' }).click();
  await page.waitForURL(Routes.DASHBOARD);
  await pauseExecution(5000);
  expect(page.url()).toBe(baseURL + Routes.DASHBOARD);
});
