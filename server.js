/**
 * Created by abrooksnagel on 1/7/16.
 */
var express = require('express');
var path = require('path');
var callMod = require('./modules/callModules');

var app = express();

app.use(express.static('static'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'static/views/index.html'));
});

app.get('/getData', function(request, response) {
    response.send(callMod.accountBalance() + callMod.firstInSecond(100, 1000000));

});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('listening on port', port);
});