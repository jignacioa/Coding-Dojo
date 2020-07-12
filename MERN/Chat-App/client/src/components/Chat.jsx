import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {navigate} from '@reach/router'
import axios from 'axios'

export default function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage]=useState('');
  const [socket] = useState(() => io(':4000'));
  const [name, setName]=useState(null)

  useEffect(() => {
     axios.get('http://localhost:4000/api/users')
       .then(response => console.log(response))
       //.catch(() => navigate('/'));
    }, []);

    
  useEffect(() => {
    socket.on('name', newUser =>{
      setName(newUser)
    });
    socket.on("updated thread", data =>
    setMessages(prevMessages =>{ 
      return[data, ...prevMessages];
    })
    );
  }, []);

  //if (name === null) return 'Loading...'
  
  function handleSubmit(e){
    e.preventDefault()
    socket.emit('new message', {
        message: newMessage,
        user: props.user
    })
    setNewMessage('')
  }
  return (
    <div>
      {/*<h1>Chat Room</h1>*/}
      {messages.map((message,i)=>(
          <p key={i}> {message.user} says:"{message.message}"</p>
        ))}
      <form onSubmit={handleSubmit}>
        <input 
        value = {newMessage}
        onChange = {e => setNewMessage(e.target.value)}/>
        <button>Start Chatting</button>
      </form>
    </div>
  );
}