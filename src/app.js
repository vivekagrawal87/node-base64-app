const express = require('express')
const hbs = require('hbs')
const path = require('path')
const base64Router = require('./routers/base64')

const app = express()

//configure Express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use('/base64', base64Router)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Base64 Encode'
    })
})

app.get('/decode', (req, res)=>{
    res.render('decode', {
        title:'Base64 Decode'
    })
})

app.listen('3000', () => console.log('Listening to 3000!'))