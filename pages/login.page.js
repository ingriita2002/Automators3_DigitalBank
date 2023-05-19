import BasePage from '../pages/base.page';

class LoginPage extends BasePage {
    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get submitBtn() { return $('#submit'); }
    
<<<<<<< Updated upstream
    get emailInput() { return $('#email') }
    get passwordInput() { return $('#pass')}
    get loginButton() { return $('//span[text()="Login"]') }
    get btnCrearCuenta() { return $("//a[@title='Create an Account']")}
    

    /**
    * Ir a crear cuenta
    */

    async irAcrearCuenta() {
        addStep(`Cliquear sobre Crear cuenta`)
        await super.clickearElemento(this.btnCrearCuenta);
    }
     

    /**
    * Login
    * @param {String} email 
    * @param {String} password
    */
    async login(email,password) {
        addStep(`Loggearse con: ${email} y ${password}`)
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await browser.pause(5000);
        await this.loginButton.click()
    }
    async logOut() {
        addStep('Cerrar sesion')
        await HomePage.hacerClicEnAccount();
        await HomePage.cerrarSesion();
        
    }
=======
    async open() {
        await this.abrir('http://digitalbank.upcamp.io/bank/login');
    }
>>>>>>> Stashed changes

    async login(username, password) {
        await this.vaciarCampoYEnviarTexto(this.username, username);
        await this.vaciarCampoYEnviarTexto(this.password, password);
        await this.clickearElemento(this.submitBtn);
    }
}

export default new LoginPage();
