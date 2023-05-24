import BasePage from '../pages/base.page';

class ViewCheckingPage extends BasePage {
  get linkViewChecking() { return $("//select[@id='selectedAccount']"); }
  
  async viewChekingAccount() {
    await this.accountDropdown.selectByVisibleText(accountName);
  }
}

export default new ViewCheckingPage ();