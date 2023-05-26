import fs from 'fs';
import path from 'path';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import CreateNewCheckingPage from '../pages/createNewChecking.page';
import WithdrawPage from '../pages/withdraw.page';
import { assert } from 'chai';

const data = fs.readFileSync(path.resolve(__dirname, '../data/user_data.json'));
const mensaje = fs.readFileSync(
  path.resolve(__dirname, '../data/mensajes.json')
);
const users = JSON.parse(data).loginUsers;
const nameAccount = 'Ingriita';
const depositAmount = '1000';
const withdraw = '400';
const mensajes = JSON.parse(mensaje).mensajes;

describe('Login, crear cuenta checking y retiro existoso', () => {
  before(async () => {
    await LoginPage.open();
    // Obtener el tercer usuario del archivo JSON
    const user = users[2];
    // Inicio de sesión
    await LoginPage.login(user.username, user.password);
  });
  it('Realizar un retiro válido a una cuenta Checking', async () => {
    try {
      await HomePage.irNewChecking();
      await CreateNewCheckingPage.createNewAccountChecking(
        nameAccount,
        depositAmount
      );
      await CreateNewCheckingPage.clickSubmitChecking();
      await CreateNewCheckingPage.obtenerMensajeConfirmacionNCkng();
      const mensajeNewChecking = mensajes[0];
      assert.strictEqual(
        await CreateNewCheckingPage.obtenerMensajeConfirmacionNCkng(),
        mensajeNewChecking.confirmacionCreateNewAccountChecking +
          ' ' +
          nameAccount
      );

      // Navegar a la página de retiro
      await HomePage.irAWithdrawMenu();
      await WithdrawPage.selectAccountWithdraw();
      // Seleccionar la cuenta para el retiro
      await WithdrawPage.selectAccountForWithdraw();
      // Ingresar el monto a retirar
      await WithdrawPage.enterWithdrawnAmount(withdraw);
      // Enviar el formulario de retiro
      await WithdrawPage.clickSubmitWithdraw();
      // Verificar que se haya redirigido a la página de vista de la cuenta Checking
      await WithdrawPage.goToViewCheckingPage();
      // Realizar las verificaciones adicionales en la página de vista de la cuenta Checking
      // Borrar los datos creados usando el botón "Delete Data" en el menú superior derecho en el home
      await HomePage.clickDeleteData();
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
