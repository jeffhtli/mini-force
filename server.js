const express = require('express')
require('express-async-errors');
const bodyParser = require('body-parser');

const next = require('next');
const puppeteer = require('puppeteer');
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

    server.get('/pdf', async (req, res) => {
      try {
        await getPdf();
        res.sendFile(PDF_PATH);
      } catch (e) {
        throw e;
      }
    });

    server.post('/simple', (req, res) => {
      return app.render(req, res, '/simple');
    });

    server.all('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  });


const PDF_PATH = __dirname + '/pdf/test.pdf';

const getPdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({'Content-Type': 'application/json'});
  await page.setRequestInterception(true);
  page.on('request', request => {
    const overrides = {};
    overrides.method = 'POST';
    overrides.postData = JSON.stringify(['Cindy', 'Jeff']);
    request.continue(overrides);
  });

  await page.goto('http://localhost:3000/simple', {waitUntil: 'networkidle2'});

  await page.pdf({
    path: PDF_PATH,
    format: 'A4',
    margin: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm'
    }
  });

  await browser.close();
};
