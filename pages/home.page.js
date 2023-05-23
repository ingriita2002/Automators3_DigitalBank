import BasePage from '../pages/base.page';

class HomePage extends BasePage {
  // WebElements
  get userAvatar() { return $("//img[@alt='User Avatar']"); }
  get checkingAccountBtn() { return $("#checking-menu"); }
  get newCheckingBtn() { return $("//a[@id='new-checking-menu-item']"); }
  get viewcheckingBtn(){return $("//a[@id='view-checking-menu-item']")}
  get btnCerrarSesion() { return $("//a[@href='/bank/logout']"); }
  get btnDeleteData() { return $("//a[@href='/bank/user/delete-data']"); }

  //-------------------------------------------------------------------------------------------------------//
  // Obtener nombre de usuario
  async getConnectedUser() {
    addStep('Obtener texto de la barra de búsqueda');
    return await this.userAvatar.getText();
  }

  // Hacer clic en los botones checking
  async clickChecking() {
    addStep('Dar clic en el botón');
    await this.checkingAccountBtn.click();
  }

  async clickNewChecking() {
    addStep('Dar clic en el botón');
    await this.newCheckingBtn.click();
  }
  async clickViewChecking() {
   addStep('Dar clic en el botón');
   await this.viewcheckingBtn.click();
 }

  // Cerrar sesión
  async cerrarSesion() {
    addStep('Dar clic en botón Log Out');
    await this.btnCerrarSesion.click();
  }
 
  // Borrar datos creados
  async clickDeleteData() {
    addStep('Borrar datos creados');
    await this.btnDeleteData.click();
  }
}

export default new HomePage();


