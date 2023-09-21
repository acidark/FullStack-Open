const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')


test('blogs are returned as json', async () => {
  await api
   .get('/api/blog')
   .expect(200)
   .expect('Content-Type',/application\/json/)

})

test('blogs return id property',async () => {
  const response = await api.get('/api/blog')
  console.log(response)
  expect(response.body[0].id).toBeDefined()
})

test('blog can be added to db',async () => {
  const numberOfBlogsAtStart = (await Blog.find({})).length
  // console.log(numberOfBlogs)
  const newBlog = {
    title : 'new blog',
    author : 'new author',
    url : 'test.com',
    likes : 55555
  }
  await api
  .post('/api/blog')
  .send(newBlog)
  .expect(201) 
  .expect('Content-Type',/application\/json/)
  const numberOfBlogsAtEnd = (await Blog.find({})).length
  expect(numberOfBlogsAtEnd).toBe(numberOfBlogsAtStart+1)
})

afterAll(async () => {
  await mongoose.connection.close()
})