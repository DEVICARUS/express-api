var express = require('express')
var router = express.Router({
  mergeParams: true
})

router.get('/', function(req, res, next) {
  res.send("/api")
});

module.exports = router;
