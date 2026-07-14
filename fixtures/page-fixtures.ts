import { Page } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { NewCarsPage } from '../pages/NewCarsPage'
import { BMWCarsPage } from '../pages/BMWCarsPage'
import { HyundaiCarsPage } from '../pages/HyundaiCarsPage'
import { TataCarsPage } from '../pages/TataCarsPage'
import { ToyotaCarsPage } from '../pages/ToyotaCarsPage'
import { CarBase } from '../pages/CarBase'

export class PageFixtures {
    readonly page: Page;
    readonly homePage: HomePage;
    readonly newCarsPage: NewCarsPage;
    readonly bmwCarsPage: BMWCarsPage;
    readonly tataCarsPage: TataCarsPage;
    readonly toyotaCarsPage: ToyotaCarsPage;
    readonly hyundaiCarsPage: HyundaiCarsPage;
    readonly carBase: CarBase;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.newCarsPage = new NewCarsPage(page);
        this.bmwCarsPage = new BMWCarsPage(page);
        this.tataCarsPage = new TataCarsPage(page);
        this.toyotaCarsPage = new ToyotaCarsPage(page);
        this.hyundaiCarsPage = new HyundaiCarsPage(page);
        this.carBase = new CarBase(page);
    }
}