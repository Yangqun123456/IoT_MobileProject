// 导入定义验证规则的包
const joi = require('joi')

// 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 定义验证注册和登录表单数据的规则对象
exports.login_schema = {
    body: {
        username,
        password,
    },
}
exports.register_schema = {
    body: {
        username,
        password,
    },
}

// 验证规则对象
exports.postCurrentData_schema = {
    body: {
        username,
        password,
        tempture: joi.number(),
        humidity: joi.number(),
        illumination: joi.number(),
        co2: joi.number(),
        time: joi.string(),
    },
}

// 验证规则对象
exports.postTarget_schema = {
    body: {
        username,
        password,
        setAttribute: joi.string(),
        targetValue: joi.number(),
    }
}

// 验证规则对象
exports.commandEquiment_schema = {
    body: {
        username,
        password,
        equiment: joi.string(),
        state: joi.bool(),
    }
}