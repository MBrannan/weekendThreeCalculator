var express = require('express');
var router = express.Router();
var path = require('path');

var addition = require('./operators/addition');
var subtraction = require('./operators/subtraction');
var multiplication = require('./operators/multiplication');
var division = require('./operators/division');

var solutions = {};

router.post('/addition', function(req, res) {
  solution.value = addition(req.body.valueOne + req.body.valueTwo);
  res.sendStatus(201);
});

router.post('/subtraction', function(req, res) {
  solution.value = subtraction(req.body.valueOne - req.body.valueTwo);
  res.sendStatus(201);
});

router.post('/multiplication', function(req, res) {
  solution.value = multiplication(req.body.valueOne * req.body.valueTwo);
  res.sendStatus(201);
});

router.post('/division', function(req, res) {
  solution.value = division(req.body.valueOne / req.body.valueTwo);
  res.sendStatus(201);
});

router.get('/'), function(req, res) {
  res.send(solutions);
}

module.exports = router;
