const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  timeout: 3000
};

const req = http.request(options, res => {
  if (res.statusCode === 200) {
    console.log('OK');
    process.exit(0);
  } else {
    console.error('Unexpected status', res.statusCode);
    process.exit(1);
  }
});

req.on('error', (err) => {
  console.error('Request error', err.message);
  process.exit(1);
});
req.end();
