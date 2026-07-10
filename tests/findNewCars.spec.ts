import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { NewCarsPage } from '../pages/NewCarsPage'

test.describe("Find New Cars Suite", () => {

    let homePage: HomePage;
    let newCarsPage: NewCarsPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        newCarsPage = new NewCarsPage(page);
        await homePage.navigateToHomePage();

    })

    test("Find New Cars Test", async ({ page }) => {
        await homePage.findNewCars();
        await expect(page).toHaveURL("/new-cars/")
        console.log(await newCarsPage.getPageHeader());
        expect(await newCarsPage.getPageHeader()).toContain("New Cars");
        await newCarsPage.navigateToBMWCarsPage();
        await newCarsPage.timeout(3000)

    })

    // page auto-closed by Playwright fixture; no manual close needed







})