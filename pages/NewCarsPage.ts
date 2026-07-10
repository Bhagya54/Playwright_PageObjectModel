import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
import pageLocators from '../locators/pageLocators.json'

export class NewCarsPage extends BasePage {


    constructor(page: Page) {
        super(page)
    }

    private locator=pageLocators.newCarsPage;
    
    async getPageHeader():Promise<string>{
         return await this.getInnerText(this.locator.newCarsPageHeading);
    }


    async navigateToBMWCarsPage(){
        await this.click(this.locator.bmwCar);
    }

    async navigateToHyundaiCarsPage(){
        await this.click(this.locator.hyundaiCar);
    }

    async navigateToTataCarsPage(){
        await this.click(this.locator.tataCar);
    }

    async navigateToToyotaCarsPage(){
        await this.click(this.locator.toyotaCar);
    }

}