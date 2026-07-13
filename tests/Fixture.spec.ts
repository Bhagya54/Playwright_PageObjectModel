import {test,expect} from '@playwright/test'

test("Browser-BrowserContext-Page",async({page})=>{
    //const context1=await browser.newContext();
    //const page1 = await context1.newPage();
    await page.goto("https://google.com")

    const context2=await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://redbus.com")

})