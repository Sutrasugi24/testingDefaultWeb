const { config } = require('../../config');
const { test, expect } = require('../setup');

// Helper function to check booking
async function accessHowToPay(webApp, codeBooking) {
    test.info().annotations.push({
        type: 'allure.step',
        value: 'Navigate to how to pay page',
    });
    await webApp.locator("id=dropdown-toggle-1").click();
    await webApp.locator("xpath=(//a[@class='font-dm-sans block px-4 py-2 text-sm text-primary hover:bg-gray-100 rounded-md'][normalize-space()='Cara Bayar'])[1]").click();

     //Expect the page to have text Metode Pembayaran
    await expect(webApp.locator('h1:text("Metode Pembayaran") >> nth=0')).toBeVisible();

}


// Main test
test('Access How to Pay page', async ({ webApp }) => {
    // Add Allure Labels for categorizing in the report
    test.info().annotations.push({
        type: 'allure.label',
        value: 'feature: how to pay page',
    });
    test.info().annotations.push({
        type: 'allure.label',
        value: 'severity: normal',
    });
    test.info().annotations.push({
        type: 'allure.label',
        value: 'platform: web',
    });
    test.info().annotations.push({
        type: 'allure.label',
        value: 'status: pass',
    });

    // Start the Change Payment Method process
    await accessHowToPay(webApp);
});
