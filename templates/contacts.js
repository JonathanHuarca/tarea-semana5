const html2 = (data) => {
    return Buffer.from(`
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
     <style type="text/css">
         h1 {text-align: center}
        h2 {text-align: left}
        h3 {text-align: right}
        h4 {text-align: justify}
    </style>
    </head>
    <body>

    <script>

    function genera_tabla() {

        var foo = ${data}.map(function(bar){
            return '<tr><td>'+bar.marca+'</td>'+'<td>'+bar.modelo+'</td>'+'</tr>'
          })
      }

    </script>
       <input type="button" value="Genera una tabla" onclick="genera_tabla()">
   </body>
</html>
`)}

module.exports = html2;