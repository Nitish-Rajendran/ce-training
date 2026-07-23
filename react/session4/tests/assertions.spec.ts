import { test, expect } from '@playwright/test';

test.describe('Assertions — State', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Add Intern button is enabled', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Add Intern' })).toBeEnabled();
  });

  test('name input is editable', async ({ page }) => {
    await expect(page.getByPlaceholder('Name')).toBeEditable();
  });

  test('Present checkbox is checked by default', async ({ page }) => {
    await expect(page.getByRole('checkbox', { name: 'Present' })).toBeChecked();
  });

  test('name input receives focus when clicked', async ({ page }) => {
    await page.getByPlaceholder('Name').click();
    await expect(page.getByPlaceholder('Name')).toBeFocused();
  });

});

test.describe('Assertions — Attributes and Classes', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Present checkbox has type attribute of checkbox', async ({ page }) => {
    await expect(
      page.getByRole('checkbox', { name: 'Present' })
    ).toHaveAttribute('type', 'checkbox');
  });

  test('dark class is applied to body after theme toggle', async ({ page }) => {
    await page.getByRole('button', { name: /switch to dark mode/i }).click();

    // Assert a CSS class was added to the root element
    await expect(page.locator('body')).toHaveClass(/dark/);
  });

  test('dark class is removed after toggling back to light', async ({ page }) => {
    await page.getByRole('button', { name: /switch to dark mode/i }).click();
    await page.getByRole('button', { name: /switch to light mode/i }).click();

    await expect(page.locator('body')).not.toHaveClass(/dark/);
  });

});

test.describe('Assertions — Page Level', () => {

  test('page has the correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Intern Dashboard/);
  });

  test('page URL is the root path', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('http://localhost:5173/');
  });

});