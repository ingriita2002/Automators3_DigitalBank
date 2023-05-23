import BasePage from '../pages/base.page';

class DepositPage extends BasePage {

  get accountDropdown() { return $("#selectedAccount"); }
  get depositNameInput() { return $("option[value='18442']");} 
  get depositAmountInput() { return $("//input[@id='amount']"); }
  get submitButton() { return $("//button[normalize-space()='Submit']"); }
  get viewCheckingTitle() { return $('#page-title'); }

  

  async selectAccountDeposit() {
    await this.clickearElemento(this.accountDropdown);

  }
 /* async selectAccountForDeposit() {
    this.addStep('Selecionar cuenta');
    await super.clickearElemento(this.depositNameInput);
  }*/
  async selectAccountForDeposit() {
    this.addStep('Selecionar cuenta');
    const selectBox = await $('#selectedAccount');
    await selectBox.selectByVisibleText('(Standard Checking)');
  }



  async enterDepositAmount(amount) {
    await this.depositAmountInput.setValue(amount);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async goToViewCheckingPage() {
    await this.viewCheckingTitle.getText();
  }
}

export default new DepositPage();

  
