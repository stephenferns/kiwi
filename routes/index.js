var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/accounting', function (req, res, next) {
  res.render('account', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/incorporation', function (req, res, next) {
  res.render('incorp', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/knowledge', function (req, res, next) {
  res.render('knowledge', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/tax', function (req, res, next) {
  res.render('tax', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

module.exports = router;
