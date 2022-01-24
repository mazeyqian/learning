const base64 = require('js-base64');
const b1Str = base64.encode('1#2#3');
const b2Str = base64.encode(b1Str);
console.log(`第一次：${b1Str}`);
console.log(`第二次：${b2Str}`);