import { Page } from "@playwright/test";
import ParentPage from "./parentPage";

class LoginPage extends ParentPage {
    constructor(page: Page) {
        super(page)
    }

    readonly btnContinueWithEmail = this.page.locator('span#buttonLabel-phone-login-button').last();
    readonly inputEmailAdress = this.page.locator('input#email')
    readonly btnContinue = this.page.locator('span#buttonLabel-email-login-button')
    readonly inputPassword = this.page.locator('#enter-password')
    readonly btnLogin = this.page.locator('#enter-password-login-button-wrapper')
    readonly iconLoading = this.page.locator('#loading-1.message')
    readonly btnNotificationNext = this.page.locator('#buttonLabel-auth-pn-next-button')
    readonly btnPermissionOk = this.page.locator('#notification-permission-ok')

    async continueWithEmail() {
        await super.click(this.btnContinueWithEmail)
    }

    async fillEmailAdress(email: string) {
        await super.fill(this.inputEmailAdress, email)
        await super.click(this.btnContinue)
    }

    async fillPassword(password: string) {
        await super.fill(this.inputPassword, password)
        await super.click(this.btnLogin)
        await this.iconLoading.waitFor({ state: "hidden" })
        await this.page.waitForTimeout(5000);
        if (await this.btnNotificationNext.isVisible()) {
            await super.click(this.btnNotificationNext)
        }
        await this.page.waitForTimeout(2000);
        if (await this.btnPermissionOk.isVisible()) {
            await super.click(this.btnPermissionOk)
        }
    }

}

export default LoginPage; 