import BasePage, { PAGE_TIMEOUT } from './base.page';


class HomePage extends BasePage {
    get userAvatar() { return $("img[alt='User Avatar']"); }
    get checkingAccount() { return $('#checking-menu'); }
    get newCheckingBtn() {return $('#new-checking-menu-item')}
    get depositMenuBtn() {return $ ('#deposit-menu-item')}
    get withdrawMenuBtn() {return $ ('#withdraw-menu-item')}
    get creditMenu() { return $("#credit-menu"); }
    get btnCerrarSesion() { return $("a[href='/bank/logout']"); }
    get welcomeMessage() { return $('.active'); }
    get btnDeleteData() { return $("//a[@href='/bank/user/delete-data']"); }

    async getConnectedUser() {
        this.addStep('Obtener texto de la barra de búsqueda');
        return await this.userAvatar.getText();
    }

    async irNewChecking() {
        this.addStep('Dar clic en el botón');
        await this.clickearElemento(this.checkingAccount);
        this.addStep('Dar clic en el botón');
        await this.clickearElemento(this.newCheckingBtn);
    }

    
    async irADeposit() {
      this.addStep('Dar clic en el botón Deposit');
      await this.clickearElemento(this.depositMenuBtn);
    }
    async irAWithdrawMenu() {
      this.addStep('Dar clic en el botón Withdraw');
      await this.withdrawMenuBtn.click()
    }

    async clickCreditMenu() {
        this.addStep('Dar clic en el menú Credit');
        await this.clickearElemento(this.creditMenu);
    }

    async clickNewApplicationMenuItem() {
      const newApplicationMenuItem = $('//a[@id="new-credit-application-menu-item"]');
      await newApplicationMenuItem.waitForClickable({ timeout: PAGE_TIMEOUT });
      await newApplicationMenuItem.click();
  }

    async cerrarSesion() {
        this.addStep('Dar clic en botón Log Out');
        await this.clickearElemento(this.btnCerrarSesion);
    }

    async logOut() {
        this.addStep('Cerrar sesión');
        await this.userAvatar.click();
        await this.cerrarSesion();
    }

    async open() {
        await this.abrir('http://digitalbank.upcamp.io/bank/home');
    }

    async clearValue(element) {
        await this.vaciarCampoYEnviarTexto(element, '');
    }

     //Borrar datos creados
  async clickDeleteData() {
    addStep('Borrar datos creados');
    await this.userAvatar.click();
    await this.btnDeleteData.click();
  }
}

export default new HomePage();
