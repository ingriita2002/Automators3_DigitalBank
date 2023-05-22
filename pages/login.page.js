import BasePage from "./base.page"
import HomePage from "./home.page"

class LoginPage extends BasePage{
    
    get emailInput() { return $('//input[@id="username"]') }
    get passwordInput() { return $('//input[@id="password"]')}
    get loginButton() { return $("//button[@id='submit']") }
   

    /**
    * Login
    * @param {String} email 
    * @param {String} password
    */
    async login(email,password) {
        addStep(`Loggearse con: ${email} y ${password}`)
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await browser.pause(2000);
        await this.loginButton.click()
    }
    async logOut() {
        addStep('Cerrar sesion')
        await HomePage.cerrarSesion();
        
    }

}
  
export default new LoginPage();
