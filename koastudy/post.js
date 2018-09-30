const Koa = require('koa')

const app = new Koa()

app.use( async (ctx) => {
    let data = await parseData(ctx)
    ctx.body = data
})

app.listen(3000, () => {
    console.log('start ok')
})

function parseData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let str = ''
            ctx.req.on('data', (data) => {
                str += data
            })
            ctx.req.addListener('end', () => {
                resolve(parseUrl(str))
            })
        } catch (err) {
            reject(err)
        }
    });
}

function parseUrl(url) {
    let obj = {}
    let arr = url.split('&')
    arr.forEach((e, i) => {
        let temparr = e.split('=')
        obj[temparr[0]] = temparr[1]
    });
    return obj
}