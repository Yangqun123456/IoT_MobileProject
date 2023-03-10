const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'iot_project_01',
  timezone: "Asia/Shanghai"
})

module.exports = db
