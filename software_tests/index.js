const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

async function example() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.google.com/');
    await driver.findElement(By.name('q')).sendKeys('hola', Key.RETURN);

}


example()