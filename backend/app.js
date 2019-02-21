const puppeteer = require('puppeteer')
const url = 'https://www.goodbudget.com'

const auth = {
  username: 'seanbrady521@gmail.com',
  password: 'jagam521'
};

(async () => {
  const browser = await puppeteer.launch({ headless: false })
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
  await page.waitForNavigation()

  // const html = await page.content()
  // console.log(html)


  const items = await page.evaluate(() => {
    const envelopes = {}
    const listItems = document.querySelectorAll('ul.nodes')
    for (const li of listItems) {
      const text = li.innerText

      const amounts = text.match(/(\d+\.\d+)/g)

      let categories = text.match(/([A-Za-z\s?]+)/g)
      categories = categories.map(elm => elm.trim())
      categories = categories.filter(elm => elm !== '')

      if (categories.length * 2 !== amounts.length || categories.length < 2) {
        continue
      }

      let amountIdx = 0
      categories.forEach(env => {
        envelopes[env] = {
          spent: amounts[amountIdx++],
          budget: amounts[amountIdx++]
        }
      })
    }
    console.log(JSON.stringify(envelopes))
  })
})()
  .catch(err => {
    console.log(err)
  })
