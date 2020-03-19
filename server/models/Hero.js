const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: String,
  title: String,
  post: String,
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  scores: {
    difficult: Number,
    skill: Number,
    attack: Number,
    survive: Number
  },
  skills: [{
    icon: String,
    title: String,
    description: String,
    tips: String
  }],
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  usageTips: String,
  attackTips: String,
  teamTips: String,
  partner: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Hero'
  }]







})

module.exports = mongoose.model('Hero', schema,'heroes')