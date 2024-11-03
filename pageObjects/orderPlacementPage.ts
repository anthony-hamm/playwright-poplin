import { Page } from "@playwright/test";
import ParentPage from "./parentPage";

class OrderPlacementPage extends ParentPage {
    constructor(page: Page) {
        super(page)
    }

    readonly btnContinue = this.page.locator('#buttonLabel-choose-profile-continue-button');
    readonly btnContinueDelivery = this.page.locator('#buttonLabel-delivery-continue-button');
    readonly labelCheckboxTypeOfDelivery = this.page.locator('.label-container label')
    readonly btnPlus = this.page.locator('poplin-button[icon="plus_custom"] #button-element')
    readonly btnContinueBagCount = this.page.locator('#buttonLabel-bag-continue-button')
    readonly btnContinueOversize = this.page.locator('#buttonLabel-oversized-continue-button')
    readonly checkboxLaundryPros1 = this.page.locator('#checkboxLabeldrawer-checkbox-1')
    readonly checkboxLaundryPros2 = this.page.locator('#checkboxLabeldrawer-checkbox-2')
    readonly checkboxLaundryPros3 = this.page.locator('#checkboxLabeldrawer-checkbox-3')
    readonly btnContinueDrawer = this.page.locator('#buttonLabel-drawer-modal-continue-button')
    readonly btnContinuePreferredLaundryPros = this.page.locator('#buttonLabel-preferred-continue-button')

    getSpecificTypeOfDelivery(label: string) {
        return this.labelCheckboxTypeOfDelivery.filter({ hasText: label })
    }

    async placeOrder(typeOfDelivery: string) {
        await super.click(this.btnContinue)
        await super.click(this.getSpecificTypeOfDelivery(typeOfDelivery))
        await super.click(this.btnContinueDelivery)
        await super.click(this.btnPlus.first())
        await super.click(this.btnContinueBagCount)
        await super.click(this.btnPlus.nth(3))
        await super.click(this.btnContinueOversize)
        await super.click(this.checkboxLaundryPros1)
        await super.click(this.checkboxLaundryPros2)
        await super.click(this.checkboxLaundryPros3)
        await super.click(this.btnContinueDrawer)
        await super.click(this.btnContinuePreferredLaundryPros)
    }
}

export default OrderPlacementPage; 