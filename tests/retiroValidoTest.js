import fs from 'fs';
import path from 'path';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import CreateNewCheckingPage from '../pages/createNewChecking.page';
import WithdrawPage from '../pages/withdraw.page';
import { assert } from 'chai';

const data = fs.readFileSync(path.resolve(__dirname, '../data/user_data.json'));
const mensaje = fs.readFileSync(path.resolve(__dirname, '../data/mensajes.json'));
const users = JSON.parse(data).loginUsers;
const nameAccount = 'Luisa2023';
const depositAmount = '2000';
const mensajes = JSON.parse(mensaje).mensajes;


describe('Realizar una nueva cuenta Checking, inicio de sesión y un depósito exitoso', () => {
  before(async () => {
    await LoginPage.open();
    // Obtener el primer usuario del archivo JSON
    const user = users[0];
    // Inicio de sesión
    await LoginPage.login(user.username, user.password);
    //Crear cuenta checking
    await HomePage.irNewChecking();
    await CreateNewCheckingPage.createNewAccountChecking(nameAccount, depositAmount);
    await CreateNewCheckingPage.clickSubmitChecking();
    await CreateNewCheckingPage.obtenerMensajeConfirmacionNCkng();
    const mensajeNewChecking = mensajes[0];
     assert.strictEqual(await CreateNewCheckingPage.obtenerMensajeConfirmacionNCkng(), mensajeNewChecking.confirmacionCreateNewAccountChecking + ' ' + nameAccount);

  });
  it('Realizar un depósito válido a una cuenta Checking', async () => {
    try {
      
      // ir a la página de depósito
      await HomePage.irAWithdrawMenu();
       // Seleccionar la cuenta para el depósito
      await WithdrawPage.selectDropdownWithdraw();
      // Ingresar el monto del depósito
      await WithdrawPage.selectAccountForWithdraw();
      await WithdrawPage.enterWithdrawnAmount(depositAmount);
      // Enviar el formulario de depósito
      await WithdrawPage.clickSubmitWithdraw();
      // Verificar que se haya redirigido a la página de vista de la cuenta Checking
      await WithdrawPage.validarViewCheckingPage();
      // Realizar las verificaciones adicionales en la página de vista de la cuenta Checking
      // Borrar los datos creados usando el botón "Delete Data" en el menú superior derecho en el home
      await HomePage.clickDeleteData();
      await browser.pause(2000);
    } catch (error) {
      console.error('Error during test:', error);
      throw error;
    }
  });
  after(async () => {
    // Cerrar sesión
    await HomePage.logOut();
  });
});
