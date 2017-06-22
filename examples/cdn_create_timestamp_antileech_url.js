const qiniu = require("../index.js");

var domain = 'http://sg.xiaohongshu.com';
var fileName = 'github.png';
//加密密钥
var encryptKey = 'xxx';
var query = {
  'name': 'qiniu',
  'location': 'shanghai'
};
var deadline = parseInt(Date.now() / 1000) + 3600;
var finalUrl = qiniu.cdn.createTimestampAntiLeechUrl(domain, fileName, query,
  encryptKey,
  deadline);
console.log(finalUrl);
