const { numeral, atob, btoa, cryptoFn, pdf, http } = require('./index');
const str = '123456789';
const roundNumber = 123.21531.rnd(2);
console.assert(roundNumber === 123.22, `Numeric round fail ${roundNumber}`);
const formatNumber = parseInt(str).fmtCurr();
console.assert(formatNumber === '123,456,789.00', `Numeral format fail ${formatNumber}`);
const encoded = btoa(str);
const decoded = atob(encoded);
console.assert(str === decoded, `Encoding and decoding fail ${encoded} ${decoded}`);
const crypto = cryptoFn(100);
const hmacStr = 'CxiWDzPAkW7vUKxQUcgb4xh1M9phnFKa4Rlp2sm5sc8dtsPksJdWW1BhDu8W/PUXfRIWfSl4a58xosbDzsp0kg==';
const hmac = crypto.calcHmac(str, str);
console.assert(hmac === hmacStr, `Calculate HMAC fail ${hmac} ${hmacStr}`);
const encrypted = crypto.encrypt(str, str);
const decrypted = crypto.decrypt(str, encrypted);
console.assert(str === decrypted, `Encryption, decryption fail ${encrypted} ${decrypted}`);
const pdfText = JSON.stringify(pdf.text('test', 'text-right'));
console.assert(pdfText === `{"text":"test","style":"text-right"}`, `PDF text fail ${pdfText}`);
const url = 'https://google.com';
http.get(url).end(res => {
  console.assert(res.statusCode === 200, `Couldn't get to ${url}`);
});