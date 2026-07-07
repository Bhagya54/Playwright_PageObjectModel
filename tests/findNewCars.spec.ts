import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'


test.describe("Find New Cars Suite", () => {

    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateToHomePage()
        
    })

    test("Find New Cars Test", async ({ page }) => {
        await homePage.findNewCars();
        await expect(page).toHaveURL("/new-cars/")

    })

    // page auto-closed by Playwright fixture; no manual close needed







})