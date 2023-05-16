import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   
   get usuarioConectado(){ return $('.welcome-msg') }
   get linkAccount() { return $("//span[@class='label'][normalize-space()='Account']"); }
   get linkLogIn() { return $('a[title="Log In"]'); }
   get btnCerrarSesion() { return $("//a[@title='Log Out']"); }

   //-------------------------------------------------------------------------------------------------------//
   // obtener nombre de usuario
   async obtenerUsuarioConectado() {
      addStep('Obtener texto de la barra de búsqueda')
      return await this.usuarioConectado.getText();
   }

   async estaConectado() {
      const nombreUsuario = await this.usuarioConectado.getText();
      return nombreUsuario !== 'WELCOME';
   }

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async buscar(articulo) {
      addStep(`Buscar artículo: ${articulo}`)
      await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
      await this.barraDeBusqueda.keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async obtenerTextoBusqueda() {
      addStep('Obtener texto de la barra de búsqueda')
      return await this.barraDeBusqueda.getValue();
   }

   // Hacer clic en el boton ACCOUNT
   async hacerClicEnAccount() {
      addStep('Dar clic en el boton ACCOUNT')
      await (await this.linkAccount).click();
   }
   //Hacer clic en el boton Log In
   async hacerClicEnLogIn() {
      addStep('Dar clic en el boton log IN')
      await (await this.linkLogIn).click();
   }

   // Cerrar sesión
   async cerrarSesion() {
      addStep('Dar clic en boton log Out')
      await (await this.btnCerrarSesion).click();
   }

}

export default new HomePage();

