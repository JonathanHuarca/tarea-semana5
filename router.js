const { read, write, count, searchBy } = require("./data/fileMapper.js");
const html = require("./templates/index.js");
const html2 = require("./templates/contacts.js");
const { Contact } = require("./data/models.js");

const router = function (req, res) {
  switch (req.url) {
    case "/":
      const shops = read("shops");
      let title = "Hola html";
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html(title, shops));
      res.end();
      break;
   case "/contacts":
      const contacts = read("contacts");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html2(contacts));
      res.end();
      break;
    case "/nosotros":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("NOSOTROS");
      res.end();
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404");
      res.end();
      break;
  }
};

module.exports = router;
