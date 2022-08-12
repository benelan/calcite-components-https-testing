const https = require('https')
const fs = require('fs')

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const options = {
  key: fs.readFileSync('unsigned-cert/key.pem'),
  cert: fs.readFileSync('unsigned-cert/cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  if (req.url === "/") {
    fs.createReadStream('./public/index.html').pipe(res)
  }
  else if (req.url.includes("/auth")) {
    fs.createReadStream('./public/auth.html').pipe(res)
  }
}).listen(8443);
