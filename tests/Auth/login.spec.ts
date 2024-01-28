import { Routes, baseURL } from '@/consts';
import { test, expect } from '@playwright/test';
import prisma from '../../lib/prismadb';
import { pauseExecution } from '@/utils/axios';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

test('login test without signup', async ({ page }) => {
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

test('create a team,signup and login test', async ({ page }) => {
  var teamsLen = 0;
  var usersLen = 0;
  await page.goto(Routes.INVITE);
  await page.getByPlaceholder('admin Email').fill('test@test.com');
  await page.getByPlaceholder('Team Name').fill('test');
  await prisma.team.findMany().then((teams) => {
    teamsLen = teams.length;
  });
  if (teamsLen > 0)
    await prisma.team.deleteMany({
      where: {
        name: 'test',
      },
    });
  (await page.getByRole('button', { name: 'Submit' }).all()).at(0)?.click();
  await pauseExecution(2000);
  await prisma.team.findMany().then((teams) => {
    teams.length > teamsLen
      ? expect(teams.length).toBe(teamsLen + 1)
      : expect(teams.length).toBe(teamsLen);
  });

  const team = await prisma.team.findMany({
    where: {
      name: 'test',
    },
  });
  expect(page.url()).toBe(
    baseURL +
      Routes.INVITE +
      '?email=' +
      'test@test.com' +
      '&teamId=' +
      team[team.length - 1].id +
      '&role=ADMIN',
  );
  await prisma.user.findMany().then((users) => {
    users.map(async (user) => {
      if (user.email === 'test@test.com') {
        await prisma.user.delete({
          where: {
            id: user.id,
          },
        });
      }
    });
    usersLen = users.length;
  });
  await page.getByPlaceholder('Full Name').fill('test');
  await page.getByPlaceholder('Email').fill('test@test.com');
  await page.getByPlaceholder('Password').first().fill('123123');
  await page.getByPlaceholder('Enter password again').fill('123123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.waitForURL(Routes.DASHBOARD);
  expect(page.url()).toBe(baseURL + Routes.DASHBOARD);
  await pauseExecution(2000);
  await prisma.user.findMany().then((users) => {
    users.length > usersLen
      ? expect(users.length).toBe(usersLen + 1)
      : expect(users.length).toBe(usersLen);
  });
});

test('login and invite to team test', async ({ page }) => {
  await page.getByPlaceholder('Email').fill('may74@gmail.com');
  await page.getByPlaceholder('Password').fill('123123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForURL(Routes.DASHBOARD);
  expect(page.url()).toBe(baseURL + Routes.DASHBOARD);
  await page.goto(Routes.INVITE);
  await page.getByPlaceholder('User Email').fill('may74@gmail.com');
  (await page.getByRole('button', { name: 'Submit' }).all()).at(1)?.click();
  await pauseExecution(2000);
  // Need to test mail sending here.
});
