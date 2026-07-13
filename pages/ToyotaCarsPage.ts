import { Page, expect } from '@playwright/test'
import { BasePage } from './BasePage'
export class ToyotaCarsPage extends BasePage {


    constructor(page: Page) {
        super(page)
    }
}