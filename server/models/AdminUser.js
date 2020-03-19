// const mongoose = require('mongoose')


// const schema = new mongoose.Schema({
//   username : {
//     type: String
//   },
//   password: {
//       type: String,
//       set: (val) => {
//         return require('bcrypt').hashSync(val, 10)
//       }
//   }

// })

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set(val) {
      var bcrypt = require('bcryptjs');
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(val, salt);
      return hash
    }
  },
})

module.exports = mongoose.model('AdminUser', schema)

// module.exports = mongoose.model('AdminUser', schema)

