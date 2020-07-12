const express = require('express'); // gives us a funciton we can call
const app = express()

const server = app.listen(4000);

//require() returns a function we can call, invoke againtst server
const io = require('socket.io')(server);

// io is a var we can attach event listeners to
//when a client connects to server side i can run some code 
//socket 
let connectedClients = 0
let price = 5;
const bids =[];

/*on takes connection and cb function
   - cb takes in socket which is a ref to actual connected client*/
//'connection' is built into socket.io
   io.on('connection', socket => {
  console.log(socket.id);
  connectedClients++
  console.log('we have ' + connectedClients + ' connected!') 
  
  //emit to all except connected socket
  socket.broadcast.emit('New user joined!')

  socket.emit('welcome', {
      price, 
      bids
  }) // sending something back - welcoming individual socket that just connected 
  
  socket.on('new bid', newBid => {
    price = newBid;
    bids.push(newBid);
    
    //to emit to all sockets! io.emit
    io.emit('price updated', price);
  })
  socket.on('disconnect', () => {
      connectedClients--
      console.log('we have ' + connectedClients + ' connected!') 
  })

})

