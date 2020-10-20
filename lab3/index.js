const http = require('http');
const initialRouter = require('./router');
const routerEx3 = require('./router2');
const routerHomework1 = require('./router3');
const routerHomework2 = require('./router4');

http.createServer(routerHomework2).listen(5500, () => {
  console.log('Server listening on port 5500');
});
