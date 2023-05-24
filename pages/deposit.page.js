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

  async selectAccountForDeposit() {
    this.addStep('Selecionar cuenta');
    const selectBox = await $('#selectedAccount');
    await selectBox.selectByVisibleText('LuisaL (Standard Checking)');
    await browser.pause(2000);
  }



  async enterDepositAmount(amount) {
    await this.depositAmountInput.setValue(amount);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async validarViewCheckingPage() {
    const pageTituloElem = await $('#page-title');
    await pageTituloElem.waitForExist({ timeout: 5000 });
    const pageTitulo = await pageTituloElem.getText();
    console.log(`Application Status: ${pageTitulo}`);
    assert.include(pageTitulo, 'View Checking Accounts', 'La pagina de view checking no se visualizo correctamente');
  }
}

export default new DepositPage();

  
