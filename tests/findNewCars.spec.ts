import { test, expect } from '../utils/test-base'


test.describe("Find New Cars Suite", () => {


    test.beforeEach(async ({ pages }) => {
        await pages.homePage.navigateToHomePage();
    })

    test("Find New Cars Test", async ({ pages }) => {
        await pages.homePage.findNewCars();
        await expect(pages.page).toHaveURL("/new-cars/")
        console.log(await pages.newCarsPage.getPageHeader());
        expect(await pages.newCarsPage.getPageHeader()).toContain("New Cars");
        await pages.newCarsPage.navigateToBMWCarsPage();
        await expect(pages.page).toHaveURL(/.*bmw/)
        await pages.newCarsPage.timeout(3000)
    })

    // page auto-closed by Playwright fixture; no manual close needed




})