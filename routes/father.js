'use strict';
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('father', { fatherName: 'Rolan Peralta' });
});

module.exports = router;