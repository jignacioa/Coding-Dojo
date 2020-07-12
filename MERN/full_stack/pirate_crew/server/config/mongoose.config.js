const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pirates', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connection to db successful!'))
.catch(err => console.log('Failed to connect to db', err))

