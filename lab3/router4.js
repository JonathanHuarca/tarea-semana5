const fs = require('fs');
const url = require('url');
const {extractNoun,removeBlankSpaces,capitalize,toLowerCase,toUpperCase,totalCharacters,} = require('./textProcessor');

const router = function (req, res) {
  res.setHeader('Content-type', 'text/html');
  fs.readFile('./templates/textProcessor.html', function (err, html) {
    let htmlString = html.toString();

    let { operation, text } = url.parse(req.url, true).query;

    const operationInt = Number(operation);
    let result;

    switch (operationInt) {
      case 1:
        result = extractNoun(text);
        break;
      case 2:
        result = 'EXTRAER CADENA DICEEEEE';
        break;
      case 3:
        result = removeBlankSpaces(text);
        break;
      case 4:
        result = capitalize(text);
        break;
      case 5:
        result = toLowerCase(text);
        break;
      case 6:
        result = toUpperCase(text);
        break;
      case 7:
        result = totalCharacters(text);
        break;
      case 8:
        result = 'ETC DIIIIIIIIIIICE';
        break;
      default:
        break;
    }

    htmlString = htmlString.replace(
      '{result}',
      result === null ? 'ERROR' : result === undefined ? '' : result
    );

    res.writeHead(200);
    res.write(htmlString);
    res.end();
  });
};

module.exports = router;
