var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/asd', function(req, res) {
    res.render('asd', { title: 'My Asd Page' });
});

router.get('/hello', function(req, res) {
    res.send("merhaba");
});

router.get('/magnet', function(req, res) {
    res.render('magnet_register', {});
});

router.get('/magnet/uye-ol', function(req, res) {
    res.render('magnet_register', {});
});

router.get('/magnet/karakter-sec', function(req, res) {
    res.render('magnet_choose_character', {});
});

module.exports = router;
