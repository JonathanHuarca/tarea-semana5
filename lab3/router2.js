const fs = require('fs');
const url = require('url');
const { add, subtract, multiply, divide } = require('./basicOperations');

const router = function (req, res) {
  res.setHeader('Content-type', 'text/html');
  fs.readFile('./templates/calculator.html', function (err, html) {
    let htmlString = html.toString();

    let { number1, number2, operation } = url.parse(req.url, true).query;

    const numberInt1 = Number(number1);
    const numberInt2 = Number(number2);
    const operationInt = Number(operation);

    let result;

    switch (operationInt) {
      case 1:
        result = multiply(numberInt1, numberInt2);
        break;
      case 2:
        result = add(numberInt1, numberInt2);
        break;
      case 3:
        result = subtract(numberInt1, numberInt2);
        break;
      case 4:
        result = divide(numberInt1, numberInt2);
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
