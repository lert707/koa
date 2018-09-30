const router = require('koa-router')()
const api = require('./api')

// 集成路由
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router
