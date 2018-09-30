const Koa = require('koa')

const app = new Koa()

app.use( async (ctx) => {
    let url = ctx.url
    // let req = ctx.request
    // let req_query = req.query
    // let req_querystring = req.querystring
    // ctx.body = {
    //     url,
    //     req_query,
    //     req_querystring
    // }

    ctx.body = {
        url,
        ctx_query: ctx.query,
        ctx_querystring: ctx.querystring
    }
})

app.listen(3000)
console.log('start ok')