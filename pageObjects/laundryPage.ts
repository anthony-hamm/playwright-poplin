import { Page } from "@playwright/test";
import ParentPage from "./parentPage";

class LaundryPage extends ParentPage {
    constructor(page: Page) {
        super(page)
    }

    readonly btnNewOrder = this.page.locator('#buttonLabel-new-order-button');
    readonly btnStartNewOrder = this.page.locator('ion-item').filter({ hasText: 'Start new order' })

    async placeNewOrder() {
        await super.click(this.btnNewOrder)
        await super.click(this.btnStartNewOrder)
    }
}

export default LaundryPage; 