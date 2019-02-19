const puppeteer = require('puppeteer')
const url = 'https://www.goodbudget.com'

const auth = {
  username: 'seanbrady521@gmail.com',
  password: 'jagam521'
};

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()

  // Go to main page
  await page.goto(url)

  // Go to login page
  await page.click('#menu-item-4994')
  await page.waitForNavigation()

  // Fill in and submit authentication
  await page.type('#username', auth.username)
  await page.type('#password', auth.password)
  await page.keyboard.press('Enter')

  const html = await page.content()

  console.log(html)
})()
  .catch(err => {
    console.log(err)
  })
