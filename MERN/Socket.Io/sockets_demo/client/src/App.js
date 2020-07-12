//import useState and useEffect
import React, {useEffect, useState} from 'react';
import './App.css';
//import io
import io from 'socket.io-client'
function App() {
  /*passing a callback function  to useState it will only be invoked the first tieme the compoent render 
  - every redner will stil be looking at same socket created the frist time*/ 
  const [socket] = useState(() => io(':4000'))
  const [price, setPrice] = useState(0)
  const [bids, setBids] = useState([]);
  const [inputVal, setInputVal] = useState(0)
    useEffect(() => {
      //'welcome' has to match server side
      socket.on('welcome', data => {
        setPrice(data.price);
        setBids(data.bids);
        setInputVal(data.price + 5)
      });

      socket.on('price updated', newBid => {
        setInputVal(newBid + 5);
        setPrice(newBid);
        //to fix stale state use cbfunction
        setBids(currentBids => [...currentBids, newBid])
      });

      socket.on('New user joined!', () => {
        console.log('New user joined!')
      })
      //need this - cleaning up after ourselves
      return () => socket.disconnect();
    }, [socket])
  //socket shouldn't change, this is just to work with warning
  
  function handleSubmit(event) {
    event.preventDefault();

    if (inputVal <= price) return
    socket.emit('new bid', inputVal)
  }
  return (
    <div className="App">
     <p>Current Bid: {price}</p>
     <p>Bids:</p>
     <ul>
       {bids.map((bid, i) => (
         <li key={i}>{bid}</li>
       ))}
     </ul>
     <form onSubmit = {handleSubmit}>
       <input
         type = "number"
         value={inputVal}
         onChange = {e => setInputVal(+e.target.value)}
         />
         <button>Place Bid!</button>
     </form>
    </div>
  );
}

export default App;
