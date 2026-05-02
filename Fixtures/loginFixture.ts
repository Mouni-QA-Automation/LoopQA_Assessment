// fixtures/loginFixture.ts

import { test as base, expect } from '@playwright/test';
import { AppPage } from '../pages/AppPage';

type MyFixtures = {
  appPage: AppPage;
};

export const test = base.extend<MyFixtures>({
  appPage: async ({ page }, use) => {
    const demoAppPage = new AppPage(page);

    await demoAppPage.goto();
    await demoAppPage.login();

    await use(demoAppPage);
  },
});

export { expect };