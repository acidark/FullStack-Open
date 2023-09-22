const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  author: String,
  url: {
    type:String,
    required:true
  },
  likes: Number
})

blogSchema.set('toJSON',{
  transform:(document,returnedDoc) => {
    returnedDoc.id = returnedDoc._id.toString()
    delete returnedDoc._id
    delete returnedDoc.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)