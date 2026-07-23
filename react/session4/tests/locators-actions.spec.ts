import { test, expect } from '@playwright/test';

test.describe('Locator Chaining and Filtering', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('finds Rahul\'s Remove button using filter', async ({ page }) => {
    // Without filtering, getByRole('button', { name: 'Remove' }) matches ALL Remove buttons
    // Filter narrows it to the row that contains 'Rahul'
    const rahulRow = page.getByRole('row').filter({ hasText: 'Rahul' });
    const removeButton = rahulRow.getByRole('button', { name: 'Remove' });

    await expect(removeButton).toBeVisible();
  });

  test('finds Priya\'s score using filter and chaining', async ({ page }) => {
    const priyaRow = page.getByRole('row').filter({ hasText: 'Priya' });

    await expect(priyaRow).toBeVisible();
    // Now assert something inside Priya's row specifically
    await expect(priyaRow.getByText('78')).toBeVisible();
  });

  test('counts only the rows that show Pass badge', async ({ page }) => {
  // Filter rows to only those that contain a Pass badge
  const passingRows = page.getByRole('row').filter({
    has: page.getByText('Pass'),
  });

  // Adjust the expected count to match your actual initial data
  await expect(passingRows).toHaveCount(3);
});

    test('counts only the rows that show Fail badge', async ({ page }) => {
    const failingRows = page.getByRole('row').filter({
        has: page.getByText('Fail'),
    });

    await expect(failingRows).toHaveCount(1);
    });

    test('first Remove button belongs to the first intern', async ({ page }) => {
  // .first() is zero-index shorthand for .nth(0)
  const firstRemove = page.getByRole('button', { name: 'Remove' }).first();
  await expect(firstRemove).toBeVisible();
});

test('last Remove button belongs to the last intern', async ({ page }) => {
  const lastRemove = page.getByRole('button', { name: 'Remove' }).last();
  await expect(lastRemove).toBeVisible();
});

test('second row is accessible by index', async ({ page }) => {
  const secondRow = page.getByRole('row').nth(1);
  await expect(secondRow).toBeVisible();
});

});

test.describe('Scoped Locators', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('asserts score and badge inside Rahul\'s card only', async ({ page }) => {
    // Find Rahul's card by filtering on the container
    const rahulCard = page.getByRole('row').filter({ hasText: 'Rahul' });

    // All assertions are scoped to Rahul's card — not the whole page
    await expect(rahulCard.getByText('92')).toBeVisible();
    await expect(rahulCard.getByText('Pass')).toBeVisible();
    await expect(rahulCard.getByRole('button', { name: 'Remove' })).toBeVisible();
  });

  test('asserts different data in two different cards', async ({ page }) => {
    const rahulCard = page.getByRole('row').filter({ hasText: 'Rahul' });
    const amitCard  = page.getByRole('row').filter({ hasText: 'Amit' });

    await expect(rahulCard.getByText('Pass')).toBeVisible();
    await expect(amitCard.getByText('Fail')).toBeVisible();
  });
  test('fills the form using scoped locators on the form container', async ({ page }) => {
  // Scope all actions to the form — avoids matching inputs that might exist elsewhere
  const form = page.getByRole('form', { name: 'Add Intern' });

  await form.getByLabel('Intern Name').fill('Vikram');
  await form.getByLabel('Score').fill('75');
  await form.getByRole('button', { name: 'Add Intern' }).click();

  await expect(page.getByText('Vikram')).toBeVisible();
});

});

test.describe('Actions', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('fill sets the input value directly', async ({ page }) => {
    await page.getByPlaceholder('Name').fill('Vikram');

    await expect(page.getByPlaceholder('Name')).toHaveValue('Vikram');
  });

  test('selectOption selects by visible label text', async ({ page }) => {
    await page.getByRole('combobox', { name: 'Role' }).selectOption({ label: 'Backend' });

    await expect(page.getByRole('combobox', { name: 'Role' })).toHaveValue('Backend');
  });

  test('selectOption selects by value attribute', async ({ page }) => {
    await page.getByRole('combobox', { name: 'Role' }).selectOption('Frontend');

    await expect(page.getByRole('combobox', { name: 'Role' })).toHaveValue('Frontend');
  });

  test('checkbox is checked by default', async ({ page }) => {
  const presentCheckbox = page.getByRole('checkbox', { name: 'Present' });
  await expect(presentCheckbox).toBeChecked();
});

test('uncheck removes the checked state', async ({ page }) => {
  const presentCheckbox = page.getByRole('checkbox', { name: 'Present' });

  await presentCheckbox.uncheck();

  await expect(presentCheckbox).not.toBeChecked();
});

test('check re-applies the checked state', async ({ page }) => {
  const presentCheckbox = page.getByRole('checkbox', { name: 'Present' });

  await presentCheckbox.uncheck();
  await presentCheckbox.check();

  await expect(presentCheckbox).toBeChecked();
});

test('Tab moves focus from name input to score input', async ({ page }) => {
  const nameInput  = page.getByPlaceholder('Name');
  const scoreInput = page.getByPlaceholder('Score');

  await nameInput.focus();
  await expect(nameInput).toBeFocused();

  await page.keyboard.press('Tab');

  await expect(scoreInput).toBeFocused();
});

test('Enter inside name input submits the form', async ({ page }) => {
  await page.getByPlaceholder('Name').fill('Vikram');
  await page.getByPlaceholder('Name').press('Enter');

  // Validation error or submission depends on whether other fields are required
  // Assert the observable outcome — adjust to match your form's behaviour
  await expect(
    page.getByText('Name is required').or(page.getByText('Vikram'))
  ).toBeVisible();
});

test('clear() empties the input', async ({ page }) => {
  const scoreInput = page.getByPlaceholder('Score');

  await scoreInput.fill('92');
  await scoreInput.clear();

  await expect(scoreInput).toHaveValue('');
});

test('type() fires individual key events', async ({ page }) => {
  // type() is for inputs that react to each keystroke — e.g. search with live filtering
  await page.getByLabel('Search').type('Rah');

  // Filtered results should appear immediately as characters are typed
  await expect(page.getByText('Rahul')).toBeVisible();
});

});