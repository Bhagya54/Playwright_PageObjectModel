import { test as base, expect, Page } from '@playwright/test'
import { PageFixtures } from '../fixtures/page-fixtures'

type Fixtures = {
    pages: PageFixtures;
}

export const test = base.extend<Fixtures>({
    pages: async ({ page }, use) => {
        const pageFixtures = new PageFixtures(page)
        await use(pageFixtures)
    }
})

export { expect }