const http = require('http');
const initialRouter = require('./router');

http.createServer(initialRouter).listen(5000, () => {
  console.log('Server listening on port 5000');
});