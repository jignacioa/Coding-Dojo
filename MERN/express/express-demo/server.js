const express = require('express');

const app = express();


//(express middleware) - invoked json function and use
app.use(express.json()) // takes incoming req and adds any json to req.body we're referencing so we can access the data

app.get('/', (req, res) => {
    res.json({message: 'Hello from Express'});
})

//retrieve all stores
app.get('/api/stores/', (req, res) => {
    res.json({
        stores: [{
            name: "Ralph's",
            address: "123456"
        }]
    })
})


//retrieve one store
app.get('/api/stores/:id', (req, res) => {
    res.json({
        stores: [{
            id: +req.params.id,
            name: "Ralph's",
            address: "123456"
        }]
    })
})

//create a store
app.post('/api/stores', (req, res)=> {
    console.log('this is the request body', req.body)
    res.json({message: 'Store Created!'})
})

//delete store
app.delete('/api/stores/:id', (req, res)=> {
    console.log(req.params)// req.params is an object - inside are keys and values that corresponds to colon syntax so in this case {id:5}
    res.json({message: 'Deleted store with id ' + req.params.id}) 
})

//update store 
app.put('/api/stores/:id', (req, res)=> {
    console.log(req.body)
    res.json({
        store: [{
            id: +req.params.id,
            name: "Trader Joe's",
            address: "123456"
        }]
    })
})

app.listen(8000, () => console.log('listening on port 8000'))