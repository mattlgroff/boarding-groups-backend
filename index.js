const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

app.get('/wdwQueues', (req, res) => {
  request(
    'https://vqguest-svc-wdw.wdprapps.disney.com/application/v1/guest/getQueues',
    (err, response, body) => {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);
      res.json(parsedBody);
    },
  );
});

app.get('/dlrQueues', (req, res) => {
  request(
    'https://vqguest-svc.wdprapps.disney.com/application/v1/guest/getQueues',
    (err, response, body) => {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);
      res.json(parsedBody);
    },
  );
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Boarding Groups API is listening on ${PORT}`);
});
