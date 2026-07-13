import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
export class HyundaiCarsPage extends BasePage {


    constructor(page: Page) {
        super(page)
    }
}