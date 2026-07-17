import { Page, expect } from '@playwright/test'

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url,{waitUntil:'networkidle'});
    }

    async click(locator: string) {
        await this.page.locator(locator).click();
    }

    async fill(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }

    
    async hover(locator: string) {
        await this.page.locator(locator).hover();
    }

    async getInnerText(locator: string):Promise<string> {
        return await this.page.locator(locator).innerText();
    }

    async timeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }

    async isElementVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }
}