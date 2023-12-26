let express = require('express');
let app = express();
console.log("Hello World");
// app.get("/", function(req, res) {
//   res.send("Hello Express")
// })
let filePath = __dirname+"/views/index.html";
let staticPath = __dirname+'/public';
app.use('/public', express.static(staticPath));
app.get("/", function(req, res) {
  res.sendFile(filePath);
});



































 module.exports = app;
