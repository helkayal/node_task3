const express = require("express")
const app = express()

const port = process.env.PORT || 3000

const path = require("path")
const filePath = path.join(__dirname, '../public')
app.use(express.static(filePath))

app.set('view engine', 'hbs')
const viewsPath = path.join(__dirname, '../dynamic/views')
app.set('views', viewsPath)

var hbs = require('hbs')
const partialsPath = path.join(__dirname, '../dynamic/partials')
hbs.registerPartials(partialsPath)


app.get('/', (req, res) => {
    res.render('index', {
        siteName: "Gamepad"
    })
})
app.get('/index', (req, res) => {
    res.render('index', {
        siteName: "Gamepad"
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT',
        siteName: "Gamepad"
    })
})
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'CONTACT US',
        siteName: "Gamepad"
    })
})
app.get('/product', (req, res) => {
    res.render('product', {
        title: 'OUR PRODUCTS',
        siteName: "Gamepad"
    })
})
app.get('/testimonial', (req, res) => {
    res.render('testimonial', {
        title: 'TESTIMONIAL',
        siteName: "Gamepad"
    })
})
app.get('/video', (req, res) => {
    res.render('video', {
        title: '3d video game',
        siteName: "Gamepad"
    })
})


app.listen(port, () => {
    console.log("Server is up on port " + port)
})