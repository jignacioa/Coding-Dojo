const PirateCtl = require('../controllers/pirate.controller')


module.exports = app => {
    app.get('/api/pirates', PirateCtl.allPirates)
    app.post('/api/pirates', PirateCtl.createPirate)
    app.get('/api/pirates/:id', PirateCtl.onePirate)
    app.delete('/api/pirates/:id', PirateCtl.deletePirate)
}