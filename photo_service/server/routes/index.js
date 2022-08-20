const Router = require('express')
const routes = require('./routes')

const router = new Router()

router.use('/img', routes)

module.exports = router