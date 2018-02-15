var express = require('express');
var app = new express();

app.use(express.static('src'));

app.listen(3000, function(){
    console.log('running on port 3000');
});