import BasePage from '../pages/base.page';

class LoginPage extends BasePage {
    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get submitBtn() { return $('#submit'); }
    
    async open() {
        await this.abrir('http://digitalbank.upcamp.io/bank/login');
    }

    async login(username, password) {
        await this.vaciarCampoYEnviarTexto(this.username, username);
        await this.vaciarCampoYEnviarTexto(this.password, password);
        await this.clickearElemento(this.submitBtn);
    }
}

export default new LoginPage();