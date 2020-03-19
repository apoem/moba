const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name : {
    type: String
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
})

schema.virtual('children', {
  ref: 'Category', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'parent', // is equal to `foreignField`
})
schema.virtual('newsList', {
  ref: 'Article', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'categories', // is equal to `foreignField`
})
module.exports = mongoose.model('Category', schema)

