// run `node index.js` in the terminal

const express = require('express');
const app = new express();
app.listen(4000, () => {
  console.log('App listening on port 4000');
});
//Đăng kí thư mục public
app.use(express.static('public'));
app.listen(4000, () => {
  console.log('App listening on port 4000');
});
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'pages/index.html'));
});
