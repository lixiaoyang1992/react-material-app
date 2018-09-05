import * as puppeteer from 'puppeteer';
import * as fs from 'fs-extra';

const site = 'http://localhost:4000';

describe('首页', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(async () => {
    fs.ensureDirSync('./screenshot');
    browser = await puppeteer.launch({
      executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium'
      // headless: false
    });
    page = await browser.newPage();
    // 设置浏览器视窗
    await page.setViewport({ width: 1440, height: 722 });
  });

  afterAll(async () => {
    browser.close();
  });

  test(
    '首页',
    async () => {
      await page.goto(site + '', {
        waitUntil: 'networkidle0' // 等待网络状态为空闲的时候才继续执行
      });
      await page.screenshot({
        path: './screenshot/首页.png',
        fullPage: true
      });
    },
    20000
  );
});
