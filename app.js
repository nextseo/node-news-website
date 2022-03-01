const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

// Static File
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/js'))


// Template Enhine
app.set('views','./src/views')
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))


// Routes
const newsRouter = require('./src/router/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)




// Listen 
app.listen(port,()=> {
    console.log('SERVER RUNNING IS '+ port);
})