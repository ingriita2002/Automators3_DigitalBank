import BasePage from '../pages/base.page';

class WithdrawPage extends BasePage {

    get withdrawnDropdown() { return $('#selectedAccount'); }
    get withdrawAmount() { return $("//input[@id='amount']"); }
    get submitWithdrawnBtn() { return $("//button[normalize-space()='Submit']"); }
    get viewCheckingLink() { return $("//a[@id='view-checking-menu-item']"); }


    
    async selectDropdownWithdraw() {
    await this.clickearElemento(this.withdrawnDropdown);

    }
  
    async selectAccountForWithdraw() {
      this.addStep('Selecionar cuenta');
      const selectBox = await $('#selectedAccount');
      await selectBox.selectByVisibleText('Luisa2023 (Standard Checking)');
      await browser.pause(2000);
    }
  
    async enterWithdrawnAmount(amount) {
      await this.withdrawAmount.setValue(amount);
    }
  
    async clickSubmitWithdraw() {
      await this.clickearElemento(this.submitWithdrawnBtn);
    }
  
    async validarViewCheckingPage() {
      const pageTituloElem = await $('#page-title');
      await pageTituloElem.waitForExist({ timeout: 5000 });
      const pageTitulo = await pageTituloElem.getText();
      console.log(`Application Status: ${pageTitulo}`);
      assert.include(pageTitulo, 'View Checking Accounts', 'La pagina de view checking no se visualizo correctamente');
    }
  }
  
  export default new WithdrawPage();