const Koa = require('koa')

const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.use( async (ctx) => {
    ctx.body =  ctx.request.body
})

app.listen(3000, () => {
    console.log('start ok')
})