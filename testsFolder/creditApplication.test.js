import fs from 'fs';
import path from 'path';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import CreditApplicationPage from '../pages/creditApplication.page';
import allure from '@wdio/allure-reporter';
import { assert } from 'chai';

// Leer el archivo JSON
const data = fs.readFileSync(path.resolve(__dirname, '../data/user_data.json'));
const user = JSON.parse(data).loginUsers[1];  // ----->  !! [0]=Lucelys, [1]=Yaka  [2]=Agustinho

describe('Credit Application', function () {
    before(async function() {
        allure.addStep('Preparing for the test');
        // Configuración previa a todas las pruebas
        await LoginPage.open();
        allure.addStep('Opening Login Page');
        
        await LoginPage.login(user.username, user.password);
        allure.addStep(`Logged in as user: ${user.username}`);
        
        await HomePage.clickChecking();
        allure.addStep('Clicking on Checking');
        
        await HomePage.clickCreditMenu(); 
        allure.addStep('Clicking on Credit Menu');
        
        await HomePage.clickNewApplicationMenuItem(); 
        allure.addStep('Clicking on New Application Menu Item');
    });

    it('Test: Jould fill Credit Application with valid data', async function () {
        try {
            await CreditApplicationPage.clickFinancialInformationSection();
            allure.addStep('Clicked on Financial Information Section');
            
            await CreditApplicationPage.selectEmploymentStatus('Unemployed');
            allure.addStep('Selected Employment Status as Unemployed');
            
            await CreditApplicationPage.enterTotalAnnualIncome('540000');
            allure.addStep('Entered Total Annual Income as 540000');
            
            await CreditApplicationPage.enterMonthlyRentMortgage('3200');
            allure.addStep('Entered Monthly Rent Mortgage as 3200');
            
            await CreditApplicationPage.enterMonthlyAutoLoanPayment('2500');
            allure.addStep('Entered Monthly Auto Loan Payment as 2500');
            
            await CreditApplicationPage.enterMonthlyOtherLoanPayment('400');
            allure.addStep('Entered Monthly Other Loan Payment as 400');
            
            await CreditApplicationPage.enterMonthlyMinimumCreditCardPayment('200');
            allure.addStep('Entered Monthly Minimum Credit Card Payment as 200');
            
            await CreditApplicationPage.enterCreditCardSpendPerMonth('100');
            allure.addStep('Entered Credit Card Spend Per Month as 100');
            
            await CreditApplicationPage.selectBankAccounts('Yes');
            allure.addStep('Selected Bank Accounts as Yes');
            
            await CreditApplicationPage.clickBlankChecksInterestCheckbox();
            allure.addStep('Clicked on Blank Checks Interest Checkbox');
            
            await CreditApplicationPage.clickBalanceTransferCheckbox();
            allure.addStep('Clicked on Balance Transfer Checkbox');
            
            await CreditApplicationPage.clickAdditionalInformationCheckbox();
            allure.addStep('Clicked on Additional Information Checkbox');
            
            await CreditApplicationPage.clickApplyButton();
            allure.addStep('Clicked on Apply Button');

            await browser.waitUntil(async function () {
                const currentUrl = await browser.getUrl();
                return currentUrl.includes('/bank/credit/credit-app-status');
              }, { timeout: 10000 });
              
            allure.addStep('Waited until URL includes /bank/credit/credit-app-status');
            
            const applicationStatusElement = await $('//strong[@class="text-white card-title"]');
            await applicationStatusElement.waitForExist({ timeout: 5000 });
              
            const applicationStatus = await applicationStatusElement.getText();
            console.log(`Application Status: ${applicationStatus}`);
              
            assert.include(applicationStatus, 'Credit Application Status', 'Application status is not as expected');
            allure.addStep('Validated Application Status');
                
        } catch (error) {
            console.error('Error during test:', error);
            throw error; // Lanzar el error para que Mocha lo registre como un fallo del test
        }

    });
});
