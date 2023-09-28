const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/' ,async(request,response)=>{
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.put('/:id', async(request,response) => {
  const {title,author,url,likes} = request.body
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id,{
    title:title,
    author:author,
    url:url,
    likes:likes
  },{new:true})
  if (updatedBlog == null) {
     return response.status(404).end()
  }
  response.json(updatedBlog)
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