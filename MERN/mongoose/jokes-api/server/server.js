const express = require('express')

const app = express()
app.use(express.json())

require('./config/mongoose.config') // to connect to db comes from mongoose.config 

const jokesRouteFunction = require('./routes/jokes.routes')
jokesRouteFunction(app)  //this app is function from routes 

app.listen(8000, () => console.log('listening from port 8000'))