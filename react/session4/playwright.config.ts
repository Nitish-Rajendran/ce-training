import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel to speed up execution
  fullyParallel: true,

  // Retry failed tests twice in CI, otherwise don't retry
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI for stability
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',
  timeout: 30000,

  use: {
    // Base URL used by page.goto('/')
    baseURL: 'http://localhost:5173',

    // Capture a trace only on the first retry of a failed test
    trace: 'on-first-retry',

    // Take screenshots only if a test fails
    screenshot: 'only-on-failure',
  },

  // For Session 1, use only Chromium
  projects: [
    {
      name: 'chromium',
      // Desktop Chrome device preset provides viewport,
      // user agent and device pixel ratio
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Start the Vite dev server before running tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
// Mobile device presets for Session 2:
// devices['iPhone 14']
// devices['Pixel 7']