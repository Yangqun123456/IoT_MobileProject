// 导入 express
const express = require('express');
// 创建服务器的实例对象
const app = express()

const joi = require('joi')

// 导入并配置 cors 中间件
const cors = require('cors')
app.use(cors())

// 托管静态html页面
app.use(express.static('views'))

// 配置解析表单数据的中间件，注意：这个中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({
    extended: false
}))

// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
    // status 默认值为 1，表示失败的情况
    // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// 导入并使用主应用的路由模块
const mainRounter = require('./router/main')
app.use('/api',mainRounter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 未知的错误
    res.cc(err)
})

// 启动服务器
app.listen(4001, () => {
    console.log(`api server running at http://127.0.0.1:4001`)
})
