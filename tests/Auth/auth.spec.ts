import { Routes, baseURL, User } from '@/consts';
import { test, expect } from '@playwright/test';
import prisma from '../../lib/prismadb';
import bcrypt from 'bcrypt';
import { Provider } from '@prisma/client';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

test('load login page', async ({ page }) => {
  await page.goto(baseURL + Routes.AUTH);
  expect(page.url()).toBe(baseURL + Routes.AUTH);
  expect(await page.title()).toBe('Management System');
});

test('check db', async () => {
  const users = await prisma.user.findMany();
  expect(users).toBeTruthy();
});

test('create static user in db', async () => {
  const passwordHash = bcrypt.hashSync(User.password, 10);
  const user = await prisma.user.create({
    data: {
      email: User.email,
      fullName: User.name,
      passwordHash: passwordHash,
      lastLogin: new Date(),
      role: User.Role,
      provider: Provider.EMAIL,
    },
    select: {
      id: true,
      email: true,
      fullName: true,
      passwordHash: true,
      lastLogin: true,
      teamId: true,
      role: true,
    },
  });
  const team = await prisma.team.create({
    data: {
      name: User.teamName,
      users: {
        connect: {
          id: user.id,
        },
      },
    },
  });
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
