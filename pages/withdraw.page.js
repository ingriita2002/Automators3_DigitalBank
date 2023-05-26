import BasePage from '../pages/base.page';

class WithdrawPage extends BasePage {
  get withdrawDropdown() {
    return $('#selectedAccount');
  }
  get withdrawName() {
    return $('=(Standard Checking)');
  }
  get withdrawAmount() {
    return $("//input[@id='amount']");
  }
  get submitWithdrawnBtn() {
    return $("//button[normalize-space()='Submit']");
  }
  get viewCheckingLink() {
    return $("//a[@id='view-checking-menu-item']");
  }

  async selectAccountWithdraw() {
    await this.clickearElemento(this.withdrawDropdown);
  }
  async selectAccountForWithdraw() {
    this.addStep('Selecionar cuenta');
    await super.clickearElemento(this.withdrawName);
  }
  async selectAccountForWithdraw() {
    this.addStep('Seleccionar cuenta');
    const account = await $('#selectedAccount');
    await account.selectByVisibleText('Ingriita (Standard Checking)');
  }

  async enterWithdrawnAmount(amount) {
    await this.withdrawAmount.setValue(amount);
  }

  async clickSubmitWithdraw() {
    await this.submitWithdrawnBtn.click();
  }

  async goToViewCheckingPage() {
    const pageTituloElem = await $('#page-title');
    await pageTituloElem.waitForExist({ timeout: 1000 });
    const pageTitulo = await pageTituloElem.getText();
    console.log(`Application Status: ${pageTitulo}`);
  }
}

export default new WithdrawPage();
