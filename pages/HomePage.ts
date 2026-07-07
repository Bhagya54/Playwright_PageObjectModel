import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
export class HomePage extends BasePage {


    constructor(page: Page) {
        super(page)
    }

    //()=> arrow function - its always bound to current page state
    //
    //private newCarsMenu = () => this.page.getByText('NEW CARS', { exact: true });
    //private findNewCarsMenu = () => this.page.getByRole('link', { name: 'Find New Cars' });

    async navigateToHomePage() {
        await this.navigateTo("/")
    }

    async findNewCars() {

        await this.hover("//div[normalize-space()='NEW CARS']");
        await this.timeout(5000);
        await this.isElementVisible("//div[contains(text(),'Find New Cars')]");
        await this.click("//div[contains(text(),'Find New Cars')]");
    }

    async searchCar() { }
    async upcomingCars() { }



}