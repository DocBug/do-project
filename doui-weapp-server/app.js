const http = require('http')
const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const fs = require('fs')

let server = new Koa()
let router = new Router()

server.use(static('./static'), {
    maxAge: 86400 * 1000
})

router.get('/a', async ctx => {
    ctx.body = '11111'
})



server.use(router.routes())
server.listen(3000, () => {
    console.log('3000 端口开始监听')
})
