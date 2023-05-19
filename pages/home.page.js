import BasePage from './base.page';

class HomePage extends BasePage {

   //WebElements
   
   get userAvatar(){ return $("img[alt='User Avatar']") }
   get checkingAccount() { return $("#checking-menu"); }
   get btnCerrarSesion() { return $("//a[@title='Log Out']"); }

   //-------------------------------------------------------------------------------------------------------//
   // obtener nombre de usuario
   async ConnectedUser() {
      addStep('Obtener texto de la barra de búsqueda')
      return await this.userAvatar.getText();
   }

   // Hacer clic en el boton ACCOUNT
   async clicChecking() {
      addStep('Dar clic en el boton ')
      await (await this.checkingAccount).click();
   }
   async clicChecking() {
      addStep('Dar clic en el boton ')
      await (await this.checkingAccount).click();
   }

    async cerrarSesion() {
        this.addStep('Dar clic en botón Log Out');
        await this.clickearElemento(this.btnCerrarSesion);
    }

   async logOut() {
      addStep('Cerrar sesion')
      await HomePage.hacerClicEnAccount();
      await HomePage.cerrarSesion();
      
  }

  /**
   * Clear the value of a text input field.
   * @param {WebdriverIO.Element} element - The text input field element.
   */
  async clearValue(element) {
   await element.waitForClickable({ timeout: PAGE_TIMEOUT });
   await element.clearValue();
 }

}

export default new HomePage();
