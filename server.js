const express = require('express');
const app = express();
// const fs = require('fs');
require('dotenv').config();

const port = process.env.PORT || 8080;


// Serve static files
app.use(express.static(__dirname + '/public'));

// use handlebars
// var exphbs = require("express-handlebars");
// app.engine(".hbs", exphbs({
//     defaultLayout: "main",
//     extname: ".hbs",
//     helpers: {
//     // capitalize words on request
//         'Capitalize': function(string)
//         {
//             return string.charAt(0).toUpperCase() + string.slice(1);
//         }
//     }
// }));

// app.set("view engine", ".hbs");

// Serve app
console.log('Listening on: http://localhost:' + port);

app.get ("/", (req, res) => {
    res.sendfile("public/index.html");
})

app.listen(port);
