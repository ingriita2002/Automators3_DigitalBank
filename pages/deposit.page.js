import BasePage from '../pages/base.page';

class DepositPage extends BasePage {
  get accountDropdown() { return $("//select[@id='selectedAccount']"); }
  get depositAmountInput() { return $("//input[@id='amount']"); }
  get submitButton() { return $("//button[normalize-space()='Submit']"); }
  get viewCheckingLink() { return $("//a[@id='view-checking-menu-item']"); }

  async selectAccountForDeposit(accountName) {
    await this.accountDropdown.selectByVisibleText(accountName);
  }

  async enterDepositAmount(amount) {
    await this.depositAmountInput.setValue(amount);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async goToViewCheckingPage() {
    await this.viewCheckingLink.click();
  }
}

export default new DepositPage();

  
