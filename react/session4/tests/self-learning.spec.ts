import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');

  // Wait until the page has finished loading
  await expect(
    page.getByRole('heading', { name: 'Intern List' })
  ).toBeVisible();
});

test('reset button clears the form', async ({ page }) => {
  await page.getByPlaceholder('Intern Name').fill('Rahul');
  await page.getByPlaceholder('Score').fill('90');

  await page.getByRole('button', { name: 'Reset' }).click();

  await expect(page.getByPlaceholder('Intern Name')).toHaveValue('');
  await expect(page.getByPlaceholder('Score')).toHaveValue('0');
});

test('changes role dropdown', async ({ page }) => {
  const dropdown = page.locator('select');

  await dropdown.selectOption('Backend');

  await expect(dropdown).toHaveValue('Backend');
});

test('checkbox can be unchecked', async ({ page }) => {
  const checkbox = page.getByRole('checkbox');

  await expect(checkbox).toBeChecked();

  await checkbox.uncheck();

  await expect(checkbox).not.toBeChecked();
});

test('shows invalid score error', async ({ page }) => {
  await page.getByPlaceholder('Intern Name').fill('Rahul');
  await page.getByPlaceholder('Score').fill('150');

  await page.getByRole('button', { name: 'Add Intern' }).click();

  await expect(
    page.getByText('Score must be between 0 and 100')
  ).toBeVisible();
});

test('theme button changes text', async ({ page }) => {
  await page.getByRole('button', {
    name: /Switch to Dark Mode/i,
  }).click();

  await expect(
    page.getByRole('button', {
      name: /Switch to Light Mode/i,
    })
  ).toBeVisible();
});