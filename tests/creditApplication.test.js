import fs from 'fs';
import path from 'path';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import CreditApplicationPage from '../pages/creditApplication.page';
import { assert } from 'chai';

// Leer el archivo JSON
const data = fs.readFileSync(path.resolve(__dirname, '../data/user_data.json'));
const user = JSON.parse(data).loginUsers[0];  // Asumiendo que siempre queremos el primer usuario

describe('Credit Application', function () {
    before(async function() {
        // Configuración previa a todas las pruebas
        await LoginPage.open();
        await LoginPage.login(user.username, user.password);
        await HomePage.clickChecking(); // Corrección: utilizar el método correcto
        await HomePage.clickNewApplicationMenuItem(); // Corrección: utilizar el método correcto
    });

    it('Test: Fill Credit Application', async function () {
        try {
            await CreditApplicationPage.clickFinancialInformationSection();
            await CreditApplicationPage.selectEmploymentStatus('Employed');
            await CreditApplicationPage.enterTotalAnnualIncome('540000');
            await CreditApplicationPage.enterMonthlyRentMortgage('3200');
            await CreditApplicationPage.enterMonthlyAutoLoanPayment('2500');
            await CreditApplicationPage.enterMonthlyOtherLoanPayment('400');
            await CreditApplicationPage.enterMonthlyMinimumCreditCardPayment('200');
            await CreditApplicationPage.enterCreditCardSpendPerMonth('100');
            await CreditApplicationPage.selectBankAccounts('Yes');
            await CreditApplicationPage.clickBlankChecksInterestCheckbox();
            await CreditApplicationPage.clickBalanceTransferCheckbox();
            await CreditApplicationPage.clickAdditionalInformationCheckbox();
            await CreditApplicationPage.clickApplyButton();

            await browser.waitUntil(async function () {
                const currentUrl = await browser.getUrl();
                return currentUrl.includes('/bank/credit/credit-app-status');
            }, { timeout: 10000 });

            const applicationStatus = await CreditApplicationPage.getCreditApplicationStatus();
            console.log(`Application Status: ${applicationStatus}`);

            assert.include(applicationStatus, 'Accepted', 'Application status is not as expected');
        } catch (error) {
            console.error('Error during test:', error);
            throw error;
        }
    });
});
