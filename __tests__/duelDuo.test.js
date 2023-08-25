const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  // test("page loads with title", async () => {
  //   await driver.get("http://localhost:8000");
  //   await driver.wait(until.titleIs("Duel Duo"), 1000);
  // });
  // test("clicking 'Draw' displays bot choices", async () =>{
  //   await driver.get("http://localhost:8000");
  //   await driver.wait(until.titleIs("Duel Duo"), 1000);
  //   await driver.sleep(500)
  //   await driver.findElement(By.id('draw')).click()
  //   await driver.sleep(500)
  //   const isPresent = await driver.findElement(By.id("choices")).isDisplayed()
  //   expect(isPresent).toBeTruthy()
  // });

  test("clicking 'Add to Duo' displays bot choices", async () =>{
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.sleep(500)
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    await driver.findElement(By.class('bot-btn')).click()
    await driver.sleep(1000)
    const isPresent = await driver.findElement(By.id("player-duo")).isDisplayed()
    await driver.sleep(1000)
    expect(isPresent).toBeTruthy()
  });
});