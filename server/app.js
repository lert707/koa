const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('./src/router/index')

const app = new Koa()

app.use(bodyparser())
   .use(router.routes())
   .use(router.allowedMethods())

app.listen(3000, () => {
    console.log('start ok')
})