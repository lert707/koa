const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const router = require("./src/router/index");
const cors = require("koa2-cors");

const app = new Koa();

app
  .use(bodyparser())
  // .use(
  //   cors({
  //       origin: function (ctx) {
  //           if (ctx.url === '/test') {
  //               return "*"; // 允许来自所有域名请求
  //           }
  //           return 'http://127.0.0.1:8080'; //.. 这样就能只允许 http://localhost:8080 这个域名的请求了
  //       },
  //       exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  //       maxAge: 5,
  //       credentials: true,
  //       allowMethods: ['GET', 'POST', 'DELETE'],
  //       allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  //   })
  // )
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log("start ok");
});
