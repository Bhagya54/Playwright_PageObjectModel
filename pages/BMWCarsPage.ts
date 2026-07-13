import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
export class BMWCarsPage extends BasePage {


    constructor(page: Page) {
        super(page)
    }
}