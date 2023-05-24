import BasePage from './base.page';
import { browser } from 'webdriverio';

class CreateNewCheckingPage extends BasePage {
  // WebElements
  get selectStandardChecking() { return $("//input[@id='Standard Checking']"); }
  get selectAccountIndividual() { return $("//input[@id='Individual']"); }
  get campName() { return $("//input[@id='name']"); }
  get campAmount() { return $("//input[@id='openingBalance']"); }
  get btnSubmitChecking() { return $("//button[@id='newCheckingSubmit']"); }
  get mensajeconfirmacion () {return $("#new-account-msg");}

  /**
   * Crear nueva cuenta checking
   * @param {String} name
   * @param {String} amount
   */
  async createNewAccountChecking(name, amount) {
    this.addStep(`Crear cuenta con: ${name} ${amount}`);
    await this.selectStandardChecking.click();
    await this.selectAccountIndividual.click();
    await this.campName.setValue(name);
    await this.campAmount.setValue(amount);
  }

  async clickSubmitChecking() {
    this.addStep('Enviar formulario');
    await this.btnSubmitChecking.click();
  }

  /**
 * Esperar a que se haya creado la cuenta y se muestre la página de "New Checking" con detalles de transacción
 */
  async obtenerMensajeConfirmacionNCkng() {
    this.addStep('Obtener mensaje de confirmacion nueva cuenta creada')
    return await this.mensajeconfirmacion.getText();
 }
 
 

}

export default new CreateNewCheckingPage();


