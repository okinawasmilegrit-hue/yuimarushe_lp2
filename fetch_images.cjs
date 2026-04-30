const https = require('https');

https.get('https://rakutokuwater.smilegrit.com/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const regex = /https:\/\/rakutokuwater\.smilegrit\.com\/wp-content\/uploads\/[^"'\s>]+[png|jpg|jpeg]/g;
    const matches = data.match(regex);
    if (matches) {
       console.log([...new Set(matches)]);
    }
  });
});
