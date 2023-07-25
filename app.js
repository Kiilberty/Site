// Loading Modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const client = require('./routes/client')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const con = require('./database')
const CriaDemo = require('./routes/DemoRoute')
const Login = require('./routes/Login')
const Home = require('./routes/Home')
// Config
    // Session
        app.use(session({
            secret: '12nubivfvuvk',
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    // Middleware
        app.use((req,res,next) => {
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    // BodyParser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            }
        }))
        app.set('view engine', 'handlebars')






    
// Public
    app.use(express.static(path.join(__dirname,'/public')))
// Router
    app.use('/ValidaLogin',Login)
    app.use('/CriaDemo',CriaDemo)
    app.use('/Login', admin)
    app.use('/Demo',client)
    app.use('/', Home)
// Outros

const PORT= 3000
app.listen(PORT, () => {
    console.log('Servidor Online!')
})



