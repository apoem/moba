const express = require('express')

const app = express()

app.set('secret', 'fsa544f')

app.use(require('cors')())

app.use(express.json())

app.use('/uploads', express.static('./uploads'))
app.use('/', express.static('./web'))
app.use('/admin', express.static('./admin'))


require('./plugin/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)


app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  
})