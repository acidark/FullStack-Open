const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('../tests/blog_api_helper')

beforeEach(async () => {
  await Blog.deleteMany({})
  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
})

describe('indexing data', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blog')
      .expect(200)
      .expect('Content-Type', /application\/json/)

  })

  test('blogs return id property', async () => {
    const response = await api.get('/api/blog')
    console.log(response)
    expect(response.body[0].id).toBeDefined()
  })
})
  test('verifying likes parameter', async () => {
    const response = await api
    
    .post('/api/blog')
    .send(helper.initialBlogs[0])
    .expect(201)
    console.log(response.body.likes)
    expect(response.body.likes).toEqual(0)
  })

describe('creating new blog', () => {
  test('blog can be added to db', async () => {
    const numberOfBlogsAtStart = helper.initialBlogs
     const newBlog = {
      title: 'new blog',
      author: 'new author',
      url: 'test.com',
      likes: 55555
    }
    await api
      .post('/api/blog')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    const numberOfBlogsAtEnd = await helper.blogsInDb()
    expect(numberOfBlogsAtEnd.length).toBe(numberOfBlogsAtStart.length + 1)
    const contents = numberOfBlogsAtEnd.map(blog => blog.title)
    expect(contents).toContain(
      "new blog"
    )
  })
})
afterAll(async () => {
  await mongoose.connection.close()
})