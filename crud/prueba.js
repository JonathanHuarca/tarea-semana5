const { read, write, count, searchBy } = require("../data/fileMapper.js");
// const html = require("./templates/index.js");
const shops = read("shops");


var foo = shops.map(function(bar){
    // return '<tr><td>'+bar.marca+'</td>'+'<td>'+bar.modelo+'</td>'+'</tr>'
    console.log(bar.id+" "+bar.shopName);
  })

