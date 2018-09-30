const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
app.use( async ( ctx ) => {
  let title = 'hello koa2'  
  // 第一个参数：要渲染的文件名，第二个参数：要传过去的数据   
  await ctx.render('test', {
    title,
    status: 0
  })
})
app.listen(3000,()=>{
    console.log('start ok');
})