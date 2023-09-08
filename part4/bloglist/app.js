const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')


mongoose.connect(config.MONGODB_URI)
.then(()=>{
    logger.info('connected to db')
})

app.use(cors())
app.use(express.json())
app.use('/api/blog',blogsRouter)



module.exports = app