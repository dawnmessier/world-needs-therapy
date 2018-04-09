const express = require('express')
const app = express()
//var router = express.Router()
var reload = require('reload');
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')
const posts = require('./data/posts')
const topics = require('./data/topics')

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

app.use(logger)
    .use(cors())
    .get('/api/posts', (req, res) => res.status(200).json(posts))
    .get('/api/topics', (req, res) => res.status(200).json(topics))

var server = app.listen(port, () => console.log('WNT app running on port ' + port + ' with a ' + delay/1000 + ' second delay'))

reload(server, app);
