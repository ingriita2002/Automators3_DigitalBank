import fs from 'fs';
import path from 'path';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import CreateNewCheckingPage from '../pages/createNewChecking.page';
import DepositPage from '../pages/deposit.page';
import allure from '@wdio/allure-reporter';
import { assert } from 'chai';

const data = fs.readFileSync(path.resolve(__dirname, '../data/user_data.json'));
const mensaje = fs.readFileSync(path.resolve(__dirname, '../data/mensajes.json'));
const users = JSON.parse(data).loginUsers;
const nameAccount = 'LuisaL';
const depositAmount = '1500';
const mensajes = JSON.parse(mensaje).mensajes;


describe('Realizar una nueva cuenta Checking, inicio de sesión y un depósito exitoso', () => {
  before(async () => {
    await LoginPage.open();
    allure.addStep('Opening Login Page');
    // Obtener el primer usuario del archivo JSON
    const user = users[0];

    await LoginPage.login(user.username, user.password);
    allure.addStep(`Logged in as user: ${user.username}`);
    
    await HomePage.irNewChecking();
    allure.addStep('Create new checking account');
    await CreateNewCheckingPage.createNewAccountChecking(nameAccount, depositAmount);
    await CreateNewCheckingPage.clickSubmitChecking();
    await CreateNewCheckingPage.obtenerMensajeConfirmacionNCkng();
    const mensajeNewChecking = mensajes[0];
    assert.strictEqual(await CreateNewCheckingPage.obtenerMensajeConfirmacionNCkng(), mensajeNewChecking.confirmacionCreateNewAccountChecking + ' ' + nameAccount);


  });
  it('Realizar un depósito válido a una cuenta Checking', async () => {
    try {
      
      // Navegar a la página de depósito
      await HomePage.irADeposit();
      allure.addStep('Select new checking account');
      await DepositPage.selectAccountDeposit();
      await DepositPage.selectAccountForDeposit();
      allure.addStep('Enter amount');
      await DepositPage.enterDepositAmount(depositAmount);
      await DepositPage.clickSubmit();
      
      allure.addStep('Validate deposit');
      await DepositPage.validarViewCheckingPage();

      allure.addStep('Delete data');
      await HomePage.clickDeleteData();
      await browser.pause(2000);
    } catch (error) {
      console.error('Error during test:', error);
      throw error;
    }
  });
  after(async () => {
    allure.addStep('LogOut');
    await HomePage.logOut();
  });
});





