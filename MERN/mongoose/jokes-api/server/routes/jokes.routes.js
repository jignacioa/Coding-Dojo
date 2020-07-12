//nees access to controller funcs - import them 
const jokesCtl = require('../controllers/jokes.controller')



module.exports = app => {
    app.get('/api/jokes', jokesCtl.getJokes),
    app.get('/api/jokes/random', jokesCtl.randomJoke),
    app.get('/api/jokes/:id', jokesCtl.singleJoke),
    app.post('/api/jokes/new', jokesCtl.createJoke),
    app.put('/api/jokes/update/:id', jokesCtl.updateJoke),
    app.delete('/api/jokes/delete/:id', jokesCtl.deleteJoke)
}