import { test, expect } from '../utils/test-base'
import { readCSVData } from '../utils/readCSV'

test.describe("Find New Cars Suite", () => {


    test.beforeEach(async ({ pages }) => {
        await pages.homePage.navigateToHomePage();
    })

    const testData = readCSVData("data/testData.csv")
    test("Find New Cars Test", async ({ pages }) => {
        for (const data of testData) {
            await pages.homePage.findNewCars();
            await expect(pages.page).toHaveURL("/new-cars/")
            console.log(await pages.newCarsPage.getPageHeader());
            expect(await pages.newCarsPage.getPageHeader()).toContain("New Cars");

            await pages.newCarsPage.navigateToBMWCarsPage();
            await expect(pages.page).toHaveURL(/.*bmw/)

            // await pages.newCarsPage.timeout(3000)
        }
    })

    test.only("Parameterization Find New Car Test", async ({ pages }) => {
        for (const data of testData) {
            await pages.homePage.findNewCars();
            await expect(pages.page).toHaveURL("/new-cars/")
            console.log(await pages.newCarsPage.getPageHeader());
            expect(await pages.newCarsPage.getPageHeader()).toContain("New Cars");
            if (data.carBrand === "bmw") {
                await pages.newCarsPage.navigateToBMWCarsPage();
                await expect(pages.page).toHaveURL(/.*bmw/)
            }
            else if (data.carBrand === "hyundai") {
                await pages.newCarsPage.navigateToHyundaiCarsPage();
                await expect(pages.page).toHaveURL(/.*hyundai/)
            }
            else if (data.carBrand === "tata") {
                await pages.newCarsPage.navigateToTataCarsPage();
                await expect(pages.page).toHaveURL(/.*tata/)
            }
            else if (data.carBrand === "toyota") {
                await pages.newCarsPage.navigateToToyotaCarsPage();
                await expect(pages.page).toHaveURL(/.*toyota/)
            }
            // await pages.newCarsPage.timeout(3000)
            const carHeaderActual = await pages.carBase.getCarHeader();
            console.log(`Car Header is: ${carHeaderActual}`)
            expect(carHeaderActual).toContain(data.carHeader);
        }
    })

    test.afterEach(async ({ pages }) => {
        await pages.page.close();
    });


    // page auto-closed by Playwright fixture; no manual close needed

})