// 接口路由

const Router = require('koa-router')
const path = require('path')
const { dbtools } = require(path.join(__dirname, '../db/mysqltools'))
const router = new Router()

router
    .get('/', (ctx) => {
        ctx.body = '这是接口页面'
    })
    .get('/index', (ctx, next) => {
        ctx.body = "hello index"
    })
    .get('/getAll', async (ctx) => {
        const result = await dbtools('SELECT * from userinfo order by id');
        ctx.body = result
    })
    .post('/queryUser', async (ctx) => {
        const parmas = ctx.request.body
        const result = await dbtools(`select * from userinfo where username=${parmas.username} && openid=${parmas.openid}`);
        ctx.body = result
    })

module.exports = router
