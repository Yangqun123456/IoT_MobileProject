const express = require('express')
const router = express.Router()
const main_hander = require('../router_handler/main')

// 1. 导入验证数据的中间件
const expressJoi = require("@escook/express-joi");
// 2. 导入需要的验证规则对象
const { login_schema, register_schema, postCurrentData_schema, postTarget_schema, commandEquiment_schema } = require("../schema/schema");

router.post('/login', expressJoi(login_schema), main_hander.login)
router.post('/register', expressJoi(register_schema), main_hander.register)
router.post('/postCurrentData', expressJoi(postCurrentData_schema), main_hander.postCurrentData)
router.post('/postTarget', expressJoi(postTarget_schema), main_hander.postTarget)
router.post('/commandEquiment', expressJoi(commandEquiment_schema), main_hander.postCommandEquiment)
router.get('/historyData', main_hander.historyData)
router.get('/getCurrentData', main_hander.getCurrentData)
router.get('/getTarget', main_hander.getTarget)
router.get('/currentEquiment', main_hander.currentEquiment)

module.exports = router