var express = require('express')
var router = express.Router({mergeParams: true})
var fs = require('fs')
var rmext = require('rmext')

fs.readdirSync(__dirname + '/routes').map(function (route) {
    if (route == 'index.js') route = ''
    router.use(`/${rmext(route)}`, require(`./routes/${route}`))
})

module.exports = router
