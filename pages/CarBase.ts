import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
import pageLocators from '../locators/pageLocators.json'
export class CarBase extends BasePage {


    constructor(page: Page) {
        super(page)
    }

    private locator = pageLocators.carBase;
    async getCarHeader():Promise<string>{
        return await this.getInnerText(this.locator.carHeader)
    }
    
}