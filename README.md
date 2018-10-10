# koa

个人学习 koa 的小demo, 数据库为mysql

koa
koa-router

---

## 环境搭建

 server 服务端
    npm i
    node app.js

 www    前端
    npm i
    npm run dev

---

## 目录结构

    服务端
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
