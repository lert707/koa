const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const Router = require('koa-router')
const static = require('koa-static')

const app = new Koa()
const router = new Router()
const staticPath = './static'

app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

app.use(static(path.join(__dirname,  staticPath)))
router
    .get('/test', async (ctx) => {
        await ctx.render('test', {
            title: '这是测试页面',
            status: 0,
            imgsrc: 'test.png'
        })
    })
    .get('/index', async (ctx, next) => {
        await ctx.render('index', {
            title: 'hello koa',
            status: 1
        })
    })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('start ok');
})