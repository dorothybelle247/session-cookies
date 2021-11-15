// mongoDB atlas

const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
// request
const morgan = require('morgan')
// handlebars
const exphbs = require('express-handlebars')
const passport = require("passport")

const connectDB = require('./config/db.js')

// passport config
require("./config/passport")(passport)

// load config
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// template engine
// handlebars viewengine
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// static foldder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/expressRoute'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${process.env.NODE_ENV} mode on port ${PORT}`))