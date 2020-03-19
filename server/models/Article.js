const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name : {
    type: String
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  body:String
}, {
  timestamps:true
})

module.exports = mongoose.model('Article', schema)


