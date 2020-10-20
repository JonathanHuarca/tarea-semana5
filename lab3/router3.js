const fs = require('fs');
const parser = require('./parser');
datos = parser.batman;

const router = (req, res) => {
  fs.readFile('./templates/form.html', function (err, html) {
    var htmlString = html.toString();

    // Get request query
    var respuesta = parser.parserVars(req),
      parametros = respuesta['parametros'],
      valores = respuesta['valores'];

    // Assing values to the html params
    for (var i = 0; i < parametros.length; i++) {
      var htmlString = htmlString.replace(
        '{' + parametros[i] + '}',
        valores[i]
      );
    }

    // Assing values to the html params (manually)
    htmlString = htmlString.replace('{identidad}', datos['identidad']);
    htmlString = htmlString.replace('{poder}', datos['poder']);

    res.writeHead(200, { 'Content-type': 'text' });
    res.write(htmlString);
    res.end();
  });
};

module.exports = router;
