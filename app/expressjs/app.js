var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World11!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//middleware
app.use(function (req, res, next) {
  if(req.url == '/test'){
    res.end("test");
  }else{
    next();
  }
  app.use(function (req, res, next) {
    if(req.url == '/one'){
      res.end("one");
    }else{
      next();
    }

  });
});