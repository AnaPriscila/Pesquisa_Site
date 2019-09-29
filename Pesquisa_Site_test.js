
Feature('Pesquisa Site');

Scenario('test something', (I) => {
    I.amOnPage('https://www.google.com.br');
    I.fillField('q','orquideas');
    I.click('btnK');
    I.saveScreenshot('imagem1.png',true);
    I.click('Imagens');
    I.saveScreenshot('imagem2.png',true);
    I.click('lindas');
    I.saveScreenshot('imagem3.png',true);
});
