const puppeteer = require('puppeteer');

(async() => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:8001/');
    await page.type('.nameIput .el-input__inner', 'admin'); // 请替换为用户名输入框的选择器
    await page.type('.inpt .el-input__inner', 'admin123'); // 请替换为用户名输入框的选择器
    await page.click('.btn'); // 请替换为登录按钮的选择器
    await page.screenshot({path: 'example.png'});
    await page.waitForSelector('.basic-header')
    console.log("success");
    browser.close();
} catch(error) {
  console.log(error);
}

})();


