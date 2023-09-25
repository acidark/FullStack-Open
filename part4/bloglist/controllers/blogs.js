const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/' ,async(request,response)=>{
  const blogs = await Blog.find({})
  response.json(blogs)
})


blogsRouter.get('/:id',(request,response,next) => {
  Blog
    .findById(request.params.id)
    .then(blog => {
      if(blog){
        response.json(blog)
      }else {
        response.status(404).end()
      }}).catch(error => next(error))
})
blogsRouter.post('/',async (request,response) => {
  const body = request.body
  const newBlog = new Blog({
    title:body.title,
    author:body.author,
    url:body.url,
    likes:body.likes || 0
  })
  const savedBlog = await newBlog.save()
  response.status(201).json(savedBlog)
})
blogsRouter.delete('/:id',async (request,response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = blogsRouter