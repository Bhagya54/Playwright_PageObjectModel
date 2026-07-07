import { Page, expect } from '@playwright/test'

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async click(locator: string) {
        await this.page.locator(locator).click();
    }

    async fill(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }

    //async hover(locatorValue: string,locatorType:string) {
    async hover(locator: string) {
        // let ele;
        // if(locatorType==='xpath' || locatorType==='css'){
        //    ele = this.page.locator(locatorValue)
        // }
        // else if(locatorType==='text'){
        //     ele=this.page.getByText(locatorValue, { exact: true });
        // }
        // else if(locatorType==='role'){
        //     ele=this.page.getByRole('link', { name: locatorValue });
        // }

        // ele.hover()
        await this.page.locator(locator).hover();


    }

    async getInnerText(locator: string) {
        await this.page.locator(locator).innerText();
    }

    async timeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }

    async isElementVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }
}