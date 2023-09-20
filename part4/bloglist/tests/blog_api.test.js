const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)


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

afterAll(async () => {
  await mongoose.connection.close()
})