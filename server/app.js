var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var staticRoutes = require('./routes/static');
var calculate = require('./routes/calculate');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.get("/*", staticRoutes);

app.use('/calculate/', calculate);

app.use(express.static('/public'));

app.listen(app.get('port'), function() {
  console.log("listening on port " + app.get('port'));
});
