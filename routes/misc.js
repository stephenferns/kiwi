var express = require('express');
var router = express.Router();


router.get('/contact-us', function (req, res, next) {
    res.render('us/contact-us', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/about-us', function (req, res, next) {
    res.render('us/about', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/terms-conditions', function (req, res, next) {
    res.render('us/t-c', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/privacy-policy', function (req, res, next) {
    res.render('us/privacy', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});

router.get('/careers', function (req, res, next) {
    res.render('us/careers', { title: 'KIWI ACCOUNTANTS & TAX AGENTS' });
});
module.exports = router;
