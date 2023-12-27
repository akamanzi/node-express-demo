require('dotenv').config()
const bodyParser = require('body-parser');
let express = require('express');
let app = express();
console.log("Hello World");
// app.get("/", function(req, res) {
//   res.send("Hello Express")
// })
let filePath = __dirname+"/views/index.html";
let staticPath = __dirname+'/public';
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
})
app.use('/public', express.static(staticPath));
app.get("/", function(req, res) {
  res.sendFile(filePath);
});
app.get('/json', function(req, res){
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      "message": "HELLO JSON"
    })
    
  }
  else {
    res.json({
      "message": "Hello json"
    })
  }
})
app.get('/now', function(req, res, next){
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({
    "time": req.time
  })
})
app.get('/:word/echo', function(req, res) {
  res.json({
    "echo": req.params.word
  })
})
app.use('/name', bodyParser.urlencoded({extended: false}))
app.route('/name')
.get(function(req, res) {
  let fullName = req.query.first + ' '+req.query.last
  res.json(
    {
      "name": fullName
    }
  )
})
.post(function(req, res) {
  let fullName = req.body.first + ' '+req.body.last
  res.json(
    {
      "name": fullName
    }
  )
})



































 module.exports = app;
