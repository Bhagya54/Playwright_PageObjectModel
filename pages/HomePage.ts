import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
import pageLocators from '../locators/pageLocators.json'

export class HomePage extends BasePage {


    constructor(page: Page) {
        super(page)
    }

    private locator = pageLocators.homePage;
    //()=> arrow function - its always bound to current page state
    //
    //private newCarsMenu = () => this.page.getByText('NEW CARS', { exact: true });
    //private findNewCarsMenu = () => this.page.getByRole('link', { name: 'Find New Cars' });

    async navigateToHomePage() {
        await this.navigateTo("/")
    }

    async findNewCars() {
        await this.timeout(7000);
        await this.hover(this.locator.newCars);
        await this.timeout(2000);
        await this.isElementVisible(this.locator.findNewCars);
        await this.click(this.locator.findNewCars);
    }

    async searchCar() { }
    async upcomingCars() { }



}