const fs = require('fs');

const router = (req, res) => {
    switch (req.url) {

        case '/inicio':
            fs.readFile('./templates/index.html', (err, html) => {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(html);
                res.end();
            });
            break;

        case '/nosotros':
            fs.readFile('./templates/nosotros.html', (err, html) => {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(html);
                res.end();
            });
            break;

        case '/nosotros':
            fs.readFile('./templates/index.html', (err, html) => {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(html);
                res.end();
            });
            break;

        case '/servicios':
            fs.readFile('./templates/index.html', (err, html) => {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(html);
                res.end();
            });
            break;

        case '/contactos':
            fs.readFile('./templates/index.html', (err, html) => {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(html);
                res.end();
            });
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('404');
            res.end();
            break;
    }
};

module.exports = router;