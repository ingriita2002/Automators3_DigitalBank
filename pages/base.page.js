const PAGE_TIMEOUT = 10000;

export default class BasePage {
   async abrir(ruta) {
       await browser.url(`${ruta}`);
   }

   async clickearElemento(elemento) {
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.click();
   }

   async vaciarCampoYEnviarTexto(elemento, texto) {
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.clearValue();
       await elemento.click();
       await elemento.keys(texto);
   }



}
