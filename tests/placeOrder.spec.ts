import { test } from '@playwright/test';
import LoginPage from '../pageObjects/loginPage';
import LaundryPage from '../pageObjects/laundryPage';
import OrderPlacementPage from '../pageObjects/orderPlacementPage';

test.describe('Place Order', () => {
    const user = 'andrew+ggg@poplin.co';
    const pass = 'Password1!';
    let loginPage: LoginPage; 
    let laundryPage: LaundryPage; 
    let orderPlacementPage: OrderPlacementPage; 

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        laundryPage = new LaundryPage(page)
        orderPlacementPage = new OrderPlacementPage(page)
        await page.goto('')
        await loginPage.continueWithEmail();
        await loginPage.fillEmailAdress(user)
        await loginPage.fillPassword(pass)
    })

    test.only('ID-2 - Existing user place new order successfully', async ({ page }) => {
        await laundryPage.placeNewOrder()
        await orderPlacementPage.placeOrder('Standard Delivery')
    });
})