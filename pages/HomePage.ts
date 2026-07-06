import { Page } from '@playwright/test'

export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //()=> arrow function - its always bound to current page state
    //
    private newCarsMenu = () => this.page.locator("//div[normalize-space()='NEW CARS']");
    private findNewCarsMenu = () => this.page.locator("//div[contains(text(),'Find New Cars')]")

    async navigateToHomePage() {
        await this.page.goto("/")
    }

    async findNewCars() {
        await this.newCarsMenu().hover();
        await this.findNewCarsMenu().click();
        await this.page.waitForTimeout(2000);
    }

    async searchCar() { }
    async upcomingCars() { }



}