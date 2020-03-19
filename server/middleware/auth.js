const jwt = require('jsonwebtoken')
const assert = require('http-assert')
const AdminUser = require('../models/AdminUser')

module.exports = function (option) {
  return async (req, res, next) => {  
    const token = (req.headers.authorization || ' ').split(' ').pop()
    assert(token, 401, '请登录 没有token')
    await jwt.verify(token, req.app.get('secret'), async function(err, decoded) {
      if (err) {
        assert(false, 401, '请登录 解析token错误')
      } else {
        assert(decoded, 401, '请登录 token验证错误')
        const user = await AdminUser.findById(decoded.id)
        assert(user, 401, '请登录  找不到对应的user')
      }
    })
    next()
  } 
}
