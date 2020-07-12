const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/peopledb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log('DB connection established'))
  .catch(() => console.log("there was an error", err))