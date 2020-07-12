const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config({path: __dirname + '/.env' })
const app = express()
require('./server/config/mongoose.config')
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const userRoutes = require('./server/routes/users.routes')
const productRouteFunc = require('./server/routes/person.routes');
userRoutes(app)
productRouteFunc(app)

app.listen(8000, () => console.log('listening on 8000'))