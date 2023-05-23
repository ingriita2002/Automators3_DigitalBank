import BasePage from '../pages/base.page';

class WithdrawPage extends BasePage {

    get withdrawnDropdown() { return $('#selectedAccount'); }
    get withdrawAmount() { return $("//input[@id='amount']"); }
    get submitWithdrawnBtn() { return $("//button[normalize-space()='Submit']"); }
    get viewCheckingLink() { return $("//a[@id='view-checking-menu-item']"); }


    
    async selectDropdownWithdraw() {
    await this.clickearElemento(this.withdrawnDropdown);

    }
  
    async selectAccountForWithdrawn(accountName) {
      await this.accountWithdrawn.selectByVisibleText(accountName);
    }
  
    async enterWithdrawnAmount(amount) {
      await this.withdrawAmount.setValue(amount);
    }
  
    async clickSubmitWithdraw() {
      await this.submitWithdrawnBtn.click();
    }
  
    async goToViewCheckingPage() {
      await this.viewCheckingLink.click();
    }
  }
  
  export default new WithdrawPage();