import BasePage, { PAGE_TIMEOUT } from './base.page';




class HomePage extends BasePage {
    get userAvatar() { return $("img[alt='User Avatar']"); }
    get checkingAccount() { return $("#checking-menu"); }
    get creditMenu() { return $("#credit-menu"); }
    get btnCerrarSesion() { return $("//a[@title='Log Out']"); }
    get welcomeMessage() { return $('.active'); }

    async getConnectedUser() {
        this.addStep('Obtener texto de la barra de búsqueda');
        return await this.userAvatar.getText();
    }

    async clickChecking() {
        this.addStep('Dar clic en el botón');
        await this.clickearElemento(this.checkingAccount);
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
}

export default new HomePage();
