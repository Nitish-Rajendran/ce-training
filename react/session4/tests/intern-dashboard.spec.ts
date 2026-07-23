import { test, expect } from '@playwright/test';

test.describe('Intern Dashboard', () => {
  // Navigate to the application before every test
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows the page title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Intern Dashboard' })
    ).toBeVisible();
  });

test('shows the initial intern names', async ({ page }) => {
  await expect(page.getByText(/Rahul/).last()).toBeVisible();
  await expect(page.getByText(/Priya/).last()).toBeVisible();
  await expect(page.getByText(/Amit/).last()).toBeVisible();
  await expect(page.getByText(/Sneha/).last()).toBeVisible();
});

  test('shows the correct number of intern cards', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(4);
  });

  test('shows the theme toggle button', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: /switch to dark mode/i })
    ).toBeVisible();
  });
});

test.describe('Locator Practice — getByRole', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('finds the Add Intern button by role', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Add Intern' })
    ).toBeVisible();
  });

  test('finds the heading by role', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Intern Dashboard' })
    ).toBeVisible();
  });

  test('finds the name input by placeholder', async ({ page }) => {
    const input = page.getByPlaceholder('Intern Name');
    await expect(input).toBeVisible();
    await expect(input).toBeEmpty();
  });

  test('finds the score input by placeholder', async ({ page }) => {
    await expect(page.getByPlaceholder('Score')).toBeVisible();
  });

  test('finds text with exact matching', async ({ page }) => {
  await expect(
    page.getByText(/Rahul/).first()
  ).toBeVisible();
});

  test('finds text with regex matching', async ({ page }) => {
    await expect(
      page.getByText(/Score: \d+/).first()
    ).toBeVisible();
  });

  test('asserts absent element is not visible', async ({ page }) => {
    await expect(
      page.getByText('Placeholder')
    ).not.toBeVisible();
  });
});

test.describe('Assertions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('heading has correct text', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Intern Dashboard' })
    ).toHaveText('Intern Dashboard');
  });

  test('theme toggle contains Dark', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: /switch to dark mode/i })
    ).toContainText('Dark');
  });

  test('error not visible initially', async ({ page }) => {
    await expect(
      page.getByText('Name is required')
    ).not.toBeVisible();
  });

  test('name input empty initially', async ({ page }) => {
    await expect(
      page.getByPlaceholder('Intern Name')
    ).toHaveValue('');
  });

  test('score input initially 0', async ({ page }) => {
    await expect(
      page.getByPlaceholder('Score')
    ).toHaveValue('0');
  });

  test('correct remove button count', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Remove' })
    ).toHaveCount(4);
  });
});

test.describe('Add Intern Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('adds a new intern', async ({ page }) => {
  await page.getByPlaceholder('Intern Name').fill('Vikram');
  await page.getByPlaceholder('Score').fill('88');

  await page.getByRole('button', { name: 'Add Intern' }).click();

 
  
   await expect(
    page.getByText('Rahul').first()

  ).toBeVisible();
});

  test('intern count increases', async ({ page }) => {
  await expect(
    page.getByRole('button', { name: 'Remove' })
  ).toHaveCount(4);

  await page.getByPlaceholder('Intern Name').fill('Vikram');
  await page.getByPlaceholder('Score').fill('88');

  await page.getByRole('button', { name: 'Add Intern' }).click();

  await expect(
    page.getByRole('button', { name: 'Remove' })
  ).toHaveCount(5);
});

  test('form clears after submit', async ({ page }) => {
    await page.getByPlaceholder('Intern Name').fill('Vikram');
    await page.getByPlaceholder('Score').fill('88');

    await page.getByRole('button', { name: 'Add Intern' }).click();

    await expect(page.getByPlaceholder('Intern Name')).toHaveValue('');
  });

  test('shows validation error', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Intern' }).click();

    await expect(page.getByText('Name is required')).toBeVisible();
  });

  test('does not add invalid intern', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Intern' }).click();

    await expect(page.getByRole('button', { name: 'Remove' })).toHaveCount(4);
  });

  test('validation disappears', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Intern' }).click();

    await page.getByPlaceholder('Intern Name').fill('Vikram');

    await expect(page.getByText('Name is required')).not.toBeVisible();
  });
});

test.describe('Remove Intern Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('removes Rahul', async ({ page }) => {
  await expect(page.getByText(/Rahul — Score:/)).toBeVisible();

  await page.getByRole('button', { name: 'Remove' }).first().click();

  await expect(page.getByText(/Rahul — Score:/)).toHaveCount(0);
});

  test('count decreases', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Remove' })).toHaveCount(4);

    await page.getByRole('button', { name: 'Remove' }).first().click();

    await expect(page.getByRole('button', { name: 'Remove' })).toHaveCount(3);
  });
});

test.describe('Theme Toggle Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('changes to Light after click', async ({ page }) => {
    await page.getByRole('button', { name: /switch to dark mode/i }).click();

    await expect(
      page.getByRole('button', { name: /switch to light mode/i })
    ).toBeVisible();
  });
  test('validation disappears after successful submit', async ({ page }) => {
  await page.getByRole('button', { name: 'Add Intern' }).click();

  await expect(
    page.getByText('Name is required')
  ).toBeVisible();

  await page.getByPlaceholder('Intern Name').fill('Vikram');
  await page.getByPlaceholder('Score').fill('88');

  await page.getByRole('button', { name: 'Add Intern' }).click();

  await expect(
    page.getByText('Name is required')
  ).toHaveCount(0);
});

  test('toggles back to Dark', async ({ page }) => {
    await page.getByRole('button', { name: /switch to dark mode/i }).click();

    await page.getByRole('button', { name: /switch to light mode/i }).click();

    await expect(
      page.getByRole('button', { name: /switch to dark mode/i })
    ).toBeVisible();
  });
});