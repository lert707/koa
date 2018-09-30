# koa

个人学习 koa 的小demo, 数据库为mysql

koa
koa-router


---

## 启动项目

 首先   npm install

 然后   node app.js

---

## 目录结构

    └── src
        ├── controllers # 操作层 执行服务端模板渲染，json 接口返回数据，页面跳转
        │   ├── admin.js
        │   ├── index.js
        │   ├── user-info.js
        │   └── work.js
        ├── routers # 路由层 控制路由
        │   ├── api.js
        │   └── index.js
        └── views # 服务端模板代码
            ├── admin.ejs
            ├── error.ejs
            ├── index.ejs
            └── work.ejs
---
