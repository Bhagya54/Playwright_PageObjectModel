import { test as base, Page } from '@playwright/test'


type Fixtures = {
    loggedInPage: Page;
}

export const test = base.extend<Fixtures>({
    loggedInPage: async ({ page }, use) => {
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.fill("#username", "student")
        await page.fill("#password", "Password123")
        await page.locator("#submit").click();
        await use(page)
    }
})