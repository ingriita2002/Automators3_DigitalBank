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

    async clickChecking() {
        this.addStep('Dar clic en el botón');
        await this.checkingAccount.click()
    }
    async clickNewChecking() {
      addStep('Dar clic en el botón');
      await this.newCheckingBtn.click();
    }
    
    async clickDeposit() {
      this.addStep('Dar clic en el botón Deposit');
      await this.depositMenuBtn.click()
    }
    async clicWithdrawMenu() {
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
        await this.clickChecking();
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
    await this.btnDeleteData.click();
  }
}

export default new HomePage();
