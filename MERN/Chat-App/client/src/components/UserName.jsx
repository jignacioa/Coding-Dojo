import React, { useState } from 'react';
import {navigate} from '@reach/router';
import io from 'socket.io-client';
 
export default function UserName(props) {
  const [socket] = useState(() => io(':4000'));
  const [newUserName, setNewUserName]=useState ('');
  
  const handleSubmit = e => {
    e.preventDefault();
    //socket.emit('new user', newUserName)
    props.onNewUser(newUserName)
    setNewUserName('Hello' +newUserName)
  }

  return (
    <div>
      <h1>Message Board</h1>
      <form onSubmit = {handleSubmit}>
        <input
        value = {newUserName}
        onChange = {e => setNewUserName(e.target.value)}
        />
        <button>Enter Username</button>
      </form>
    </div>
  )
};
