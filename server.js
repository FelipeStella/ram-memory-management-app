const http = require('http');
const status = require('./pcInfo');

const host = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
    let url = req.url;

    if(url === '/status') {
        res.end(JSON.stringify(status, null, 2));
    }else {
        res.end('<h1>Welcome</h1>')
    }
  }).listen(3000, () => console.log(`Server is running in ${host}:${port}`));