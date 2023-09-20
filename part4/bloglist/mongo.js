const mongoose = require('mongoose')
if(process.argv.length<3){
  console.log('enter pass as argument')
  process.exit(1)
}
const password = process.argv[2]
// const url = `mongodb+srv://atomikx:${password}@cluster0.ribgxny.mongodb.net/noteApp?retryWrites=true&w=majority`
const TEST_MONGODB_URI = `mongodb+srv://atomikx:${password}@cluster0.ribgxny.mongodb.net/testBloglistApp?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
// mongoose.connect(url)
mongoose.connect(TEST_MONGODB_URI)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON',{
  transform:(document,returnedDoc) => {
    returnedDoc.id = returnedDoc._id.toString()
    delete returnedDoc._id
    delete returnedDoc.__v
  }
})
const Blog = mongoose.model('Blog',blogSchema)
const blog = new Blog({
  title : 'blog book',
  author : 'eminem',
  url : 'test.com',
  likes : 8888
})

Blog.find({}).then(result => {
  result.forEach(blog => {
    console.log(blog)
  })
  mongoose.connection.close()
})


blog.save().then(() => {
  console.log('blog saved')
  mongoose.connection.close()
})