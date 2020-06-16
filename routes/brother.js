'use strict';
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('brother', { brotherName: 'Sean Paul Magbanua' });
});

module.exports = router;