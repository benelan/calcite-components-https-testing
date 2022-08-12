const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const app = express();

const key = fs.readFileSync("./unsigned-cert/key.pem", "utf8");
const cert = fs.readFileSync("./unsigned-cert/cert.pem", "utf8");

app.use(express.static("dist"));

const httpServer = http.createServer(app);
const httpsServer = https.createServer({ key, cert }, app);

httpServer.listen(8080);
httpsServer.listen(8443);
