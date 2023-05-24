import fs from 'fs';
import path from 'path';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import { assert } from 'chai';

// Leer el archivo JSON !! VER user_data.json  !! Agregar sus users  <-----
const data = fs.readFileSync(path.resolve(__dirname, '../data/user_data.json'));
<<<<<<< HEAD
const user = JSON.parse(data).loginUsers[1];  // ----->  !! [0]=Lucelys, [1]=Augusto  [2]=Agustinho  
=======
const user = JSON.parse(data).loginUsers[0];  // ----->  !! [0]=Lucelys, [1]=Augusto  [2]=Agustinho  
>>>>>>> 25836a76a9068c9a6234912b2333530f5a637ce1

describe('Digital Bank Login', function () {
    beforeEach(async function() {
        // Configuración previa a cada test
        await LoginPage.open();
    });


    it(`Login user: "${user.firstName} ${user.lastName}" and Validate Welcome Message`, async function () { 
        try {
            await LoginPage.login(user.username, user.password);

            await HomePage.open();
            await HomePage.welcomeMessage.waitForDisplayed();
            const welcomeMessage = await HomePage.welcomeMessage.getText();
            console.log(`Welcome Message: ${welcomeMessage}`); // Imprime el mensaje de bienvenida en la consola
            assert.include(welcomeMessage, 'Welcome', 'Welcome message is not as expected');
        } catch (error) {
            console.error('Error during test:', error);
            throw error; // Lanzar el error para que Mocha lo registre como un fallo del test
        }
    });
});
