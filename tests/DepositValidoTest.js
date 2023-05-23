
import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';
import CreateNewCheckingPage from '../pages/createNewChecking.page';
import DepositPage from '../pages/deposit.page';

const email = 'luisalopez@gmail.com';
const password = 'Luisa123456';
const nameAccount ='LuisaL';
const amount ='20000';
const depositAmount = '2500';


  describe('Realizar una nueva cuenta Checking, inicio de sesión y un depósito exitoso', () => {
    before(async () => {

    
      // Precondiciones: Crear una nueva cuenta Checking
      await LoginPage.login(email, password);
      await HomePage.clickChecking();
      await HomePage.clickNewChecking();
      await CreateNewCheckingPage.createNewAccountChecking(nameAccount, amount);
      await CreateNewCheckingPage.clickSubmitChecking();
      await CreateNewCheckingPage.waitForAccountCreated();
    });

    it('Realizar un depósito válido a una cuenta Checking', async () => {

      await HomePage.abrir('/');
      // Inicio de sesión
      await LoginPage.login('email', 'password');

      // Navegar a la página de depósito
      await HomePage.clickChecking();
      await HomePage.clickNewChecking();
      await CreateNewCheckingPage.createNewAccountChecking(nameAccount, depositAmount);
      await CreateNewCheckingPage.clickSubmitChecking();
      await CreateNewCheckingPage.waitForAccountCreated();

      // Seleccionar la cuenta para el depósito
      await DepositPage.selectAccountForDeposit(nameAccount);

      // Ingresar el monto del depósito
      await DepositPage.enterDepositAmount(depositAmount);

      // Enviar el formulario de depósito
      await DepositPage.clickSubmit();

      // Verificar que se haya redirigido a la página de vista de la cuenta Checking
      assert.ok(await DepositPage.goToViewCheckingPage());

      // Realizar las verificaciones adicionales en la página de vista de la cuenta Checking

      // Borrar los datos creados usando el botón "Delete Data" en el menú superior derecho en el home
      await HomePage.clickDeleteData();
    });

    after(async () => {
      // Cerrar sesión
      await LoginPage.logOut();
    });
  });


