import { test, expect } from '@playwright/test';

test.describe('PublicEnvScript (Pages Router)', () => {
  test.beforeEach(async ({}, testInfo) => {
    test.skip(
      testInfo.project.name !== 'next-16-pages-router',
      'Only runs on pages router project',
    );
  });

  test('injects environment variables via script in document head', async ({
    page,
  }) => {
    await page.goto('/');

    // Verify the script tag is present in the head
    const script = await page.locator('head script').first();
    expect(script).not.toBeNull();

    // Verify window.__NEXT_PUBLIC_ENV is set correctly
    const envData = await page.evaluate(() => window.__NEXT_PUBLIC_ENV);
    expect(envData).toEqual({
      NEXT_PUBLIC_APP_NAME: 'next-public-env',
      NEXT_PUBLIC_APP_VERSION: '0.1.0',
      NEXT_PUBLIC_HELLO: 'world',
    });
  });

  test('getPublicEnv returns the expected data on the client', async ({
    page,
  }) => {
    await page.goto('/');

    const data = await page.locator('#__NEXT_PUBLIC_ENV__').textContent();

    expect(JSON.parse(data!)).toEqual({
      NEXT_PUBLIC_APP_NAME: 'next-public-env',
      NEXT_PUBLIC_APP_VERSION: '0.1.0',
      NEXT_PUBLIC_HELLO: 'world',
    });
  });

  test('window.__NEXT_PUBLIC_ENV is frozen and cannot be modified', async ({
    page,
  }) => {
    await page.goto('/');

    const isFrozen = await page.evaluate(() => {
      return Object.isFrozen(window.__NEXT_PUBLIC_ENV);
    });

    expect(isFrozen).toBe(true);
  });
});
