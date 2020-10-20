;var url=require('url');
const fs = require('fs');
const {encaminar} = require('./processor');

var mime = {

  'js' : 'text/javascript',
  'html' : 'text/html',
  'css' : 'text/css',
  'ico'  : 'image/x-icon',
  'jpg' : 'image/jpg',
  'gif' : 'image/gif',
  'png' : 'image/png'
};


const router = (req, res) => {
  switch (req.url) {

    case '/':
      fs.readFile('./templates/index.html', (err, html) => {
        res.writeHead(200, { 'Content-type': mime });
        res.write(html);
        res.end();
      });
      break;

    case '/bienvenido':
      fs.readFile('./templates/index.html', (err, html) => {
        res.writeHead(200, { 'Content-type': mime });
        res.write(html);
        res.end();
      });
      break;

    case '/nosotros':
      fs.readFile('./templates/index.html', (err, html) => {
        res.writeHead(200, { 'Content-type': mime });
        res.write(html);
        res.end();
      });
      break;

    case '/servicios':
      fs.readFile('./templates/index.html', (err, html) => {
        res.writeHead(200, { 'Content-type': mime});
        res.write(html);
        res.end();
      });
      break;
    
    case '/contactos':

          var objetourl = url.parse(req.url);
          var camino='templates'+objetourl.pathname;
          console.log(camino);
          if (camino=='templates/contactos')
            camino='templates/form.html';
            encaminar(req,res,camino);
        break;

    case '/recuperardatos':
      
          var objetourl = url.parse(req.url);
          var camino='templates'+objetourl.pathname;
          console.log(camino);
          if (camino=='templates/contactos')
            camino='templates/form.html';
            encaminar(req,res,camino);
        break;

    default:
      res.writeHead(404, { 'Content-Type': mime});
      res.write('404');
      res.end();
      break;
  }
};

module.exports = router;


