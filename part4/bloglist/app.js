const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
TEST_MONGODB_URI = 'mongodb+srv://atomikx:d3AFlmFd6SzAcSgf@cluster0.ribgxny.mongodb.net/testBloglistApp?retryWrites=true&w=majority'

mongoose.connect(TEST_MONGODB_URI)
  .then(() => {
    logger.info('connected to db')
  }).catch(error => {
    logger.error('error connecting to MongoDB',error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blog',blogsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app