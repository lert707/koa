const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser')
const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = "Hello koa-router";
});

router.get('/login', (ctx, next) => {
    ctx.body = ctx.query
})

router.post('/getAll', (ctx, next) => {
    ctx.body = ctx.request.body
})

const one = new Router();
one.get('/get', (ctx, next) => {
    ctx.body = 'one page'
})

const two = new Router();
two.get('/get', (ctx, next) => {
    ctx.body = 'two page'
})

router.use('/one', one.routes(), one.allowedMethods())
router.use('/two', two.routes(), two.allowedMethods())

app
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, ()=>{
    console.log('starting at port 3000');
});