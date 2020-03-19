module.exports = app => {
  const inflection = require('inflection');
  const express = require('express')
  const router = express.Router({ mergeParams: true })
  const multer = require('multer')
  const AdminUser = require('../../models/AdminUser')
  const bcrypt = require('bcryptjs')
  const jwt = require('jsonwebtoken')
  const authMiddleware = require('../../middleware/auth')
  const assert = require('http-assert')


  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  router.get('/', async (req, res) => {
    const queryOption = {}
    if (req.Model.modelName === 'Category') {
      queryOption.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOption)
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    const item = await req.Model.findById(req.params.id)
    res.send(item)
  })
  router.put('/:id', async (req, res) => {
    await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send({ message: 'success' })
  })
  router.delete('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndRemove(req.params.id)
    res.send(model)
  })


  app.use('/admin/api/rest/:resource', authMiddleware(), async (req, res, next) => {
    const ModelName = inflection.classify(`${req.params.resource}`)
    req.Model = require(`../../models/${ModelName}`)
    next()
  }, router)

  //上传图片
  const upload = multer({ dest: __dirname + './../../uploads' })
  app.post('/admin/api/uploads', upload.single('file'), (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${req.file.filename}`
    res.send(file)
  })

  //登陆接口
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    const user = await AdminUser.findOne({ username }).select('+password')
    if (!user) {
      res.status(422).send({
        message: '用户不存在'
      })
    }
    const isValid = bcrypt.compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send(token)
  })
  //校验localStorage
  app.post('/admin/api/verify', async (req, res) => {
    const { token } = req.body;
    try {
      const ret = await jwt.verify(token, req.app.get('secret'))
      const user = await AdminUser.findById(ret.id)
      if (!ret && !user) {
        return res.send(false)
      } else res.send(true)
    } catch {
      return res.send(false)
    }
    
  })


  //错误处理中间件
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}