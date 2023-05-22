import BasePage from './base.page';
import { browser } from 'webdriverio';

class CreateNewCheckingPage extends BasePage {
  // WebElements
  get selectStandardChecking() { return $("//input[@id='Standard Checking']"); }
  get selectAccountIndividual() { return $("//input[@id='Individual']"); }
  get campName() { return $("//input[@id='name']"); }
  get campAmount() { return $("//input[@id='openingBalance']"); }
  get btnSubmitChecking() { return $("//button[@id='newCheckingSubmit']"); }

  /**
   * Crear nueva cuenta checking
   * @param {String} name
   * @param {String} amount
   */
  async createNewAccountChecking(name, amount) {
    addStep(`Crear cuenta con: ${name} ${amount}`);
    await this.selectStandardChecking.click();
    await this.selectAccountIndividual.click();
    await this.campName.setValue(name);
    await this.campAmount.setValue(amount);
  }

  async clickSubmitChecking() {
    addStep('Enviar formulario');
    await this.btnSubmitChecking.click();
  }

  /**
   * Esperar a que se haya creado la cuenta
   */
  async waitForAccountCreated() {
    const element = await $("//selector/del/elemento");
    await browser.waitUntil(async () => {
      return await element.isDisplayed();
    }, {
      timeout: PAGE_TIMEOUT,
      timeoutMsg: 'El elemento no se ha vuelto visible en el tiempo esperado'
    });
  }
}

export default new CreateNewCheckingPage();


