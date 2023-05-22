import BasePage from './base.page';

class CreditApplicationPage extends BasePage {
    get creditMenu() { return $("#credit-menu"); }
    get newApplicationMenuItem() { return $("#new-credit-application-menu-item"); }
    get financialInformationSection() { return $('//strong[normalize-space()="Financial Information"]'); }
    get employmentStatusDropdown() { return $("#employmentStatus"); }
    get totalAnnualIncomeInput() { return $("#annualIncome"); }
    get monthlyRentMortgageInput() { return $("#monthlyMortgage"); }
    get monthlyAutoLoanPaymentInput() { return $("#monthlyAutoLoan"); }
    get monthlyOtherLoanPaymentInput() { return $("#monthlyOtherLoan"); }
    get monthlyMinimumCreditCardPaymentInput() { return $("#minimumCreditCard"); }
    get creditCardSpendPerMonthInput() { return $("#monthlySpend"); }
    get bankAccountsDropdown() { return $("#bankStatus"); }
    get blankChecksInterestCheckbox() { return $('(//input[@id="cashAdvance"])[1]'); }
    get balanceTransferCheckbox() { return $('(//input[@id="balanceTransfer"])[1]'); }
    get additionalInformationCheckbox() { return $("#agreeTerms"); }
    get applyButton() { return $('//button[normalize-space()="Apply"]'); }
    get creditApplicationStatusText() { return $('//strong[@class="text-white card-title"]'); }

    async clickCreditMenu() {
        await this.clickearElemento(this.creditMenu);
    }

    async clickNewApplicationMenuItem() {
        await this.clickearElemento(this.newApplicationMenuItem);
    }

    async clickFinancialInformationSection() {
        await this.clickearElemento(this.financialInformationSection);
    }

    async selectOptionByValue(element, optionValue) {
        await element.selectByAttribute('value', optionValue);
    }

    async selectEmploymentStatus(optionValue) {
        await this.selectOptionByValue(this.employmentStatusDropdown, optionValue);
    }

    async enterTotalAnnualIncome(value) {
        await this.vaciarCampoYEnviarTexto(this.totalAnnualIncomeInput, value);
    }

    async enterMonthlyRentMortgage(value) {
        await this.vaciarCampoYEnviarTexto(this.monthlyRentMortgageInput, value);
    }

    async enterMonthlyAutoLoanPayment(value) {
        await this.vaciarCampoYEnviarTexto(this.monthlyAutoLoanPaymentInput, value);
    }

    async enterMonthlyOtherLoanPayment(value) {
        await this.vaciarCampoYEnviarTexto(this.monthlyOtherLoanPaymentInput, value);
    }

    async enterMonthlyMinimumCreditCardPayment(value) {
        await this.vaciarCampoYEnviarTexto(this.monthlyMinimumCreditCardPaymentInput, value);
    }

    async enterCreditCardSpendPerMonth(value) {
        await this.vaciarCampoYEnviarTexto(this.creditCardSpendPerMonthInput, value);
    }

    async selectBankAccounts() {
        const optionText = 'Neither'; // Texto correspondiente a la opción a seleccionar
        await this.selectOptionByText(this.bankAccountsDropdown, optionText);
    }

    async clickBlankChecksInterestCheckbox() {
        await this.clickearElemento(this.blankChecksInterestCheckbox);
    }

    async clickBalanceTransferCheckbox() {
        await this.clickearElemento(this.balanceTransferCheckbox);
    }

    async clickAdditionalInformationCheckbox() {
        await this.clickearElemento(this.additionalInformationCheckbox);
    }

    async clickApplyButton() {
        await this.clickearElemento(this.applyButton);
    }

    async getCreditApplicationStatus() {
        return await this.creditApplicationStatusText.getText();
    }
    async selectOptionByText(element, optionText) {
        await element.waitForExist();
        await element.selectByVisibleText(optionText);
    }
}

export default new CreditApplicationPage();
