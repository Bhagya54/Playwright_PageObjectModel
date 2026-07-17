import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
import pageLocators from '../locators/pageLocators.json'
export class CarBase extends BasePage {


    constructor(page: Page) {
        super(page)
    }

    private carBaseLocators = pageLocators.carBase;
    async getCarHeader():Promise<string>{
        return await this.getInnerText(this.carBaseLocators.carHeader)
    }
    
    async getCarModelAndPrice(){
        const carModels= this.page.locator(this.carBaseLocators.carModel);//multiple car models- 10
        const carPrices= this.page.locator(this.carBaseLocators.carPrice);//multiple car prices

        const countCars=await carPrices.count();

        for(let i=0;i<countCars;i++){
            const carModel=await carModels.nth(i).innerText();
            const carPrice=await carPrices.nth(i).innerText();
            console.log(`Car Model: ${carModel} and Car Price: ${carPrice} `)
        }
       

    }
}