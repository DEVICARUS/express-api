var express = require('express')
var router = express.Router({
  mergeParams: true
})

router.get('/', function(req, res, next) {
  res.send("/api/users")
});

router.get('/search', function(req, res, next) {
  res.send("/api/users/search")
});

module.exports = router;
