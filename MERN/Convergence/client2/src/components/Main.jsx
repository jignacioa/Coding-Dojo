import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import io from 'socket.io-client';
import UserName from './UserName'
import Chat from './Chat'
import Rules from '../views/Rules'
import LogoutButton from './Logout'
import '../static/Convergence.css'
import Header from '../views/Header'

export default function Main() {
  const [newUserName, setNewUserName]=useState ('');
  const [socket] = useState(() => io(':4000'));
  const setCurrentUser = (newUser) => {
    setNewUserName(newUser) }
   
  socket.emit('new user', newUserName)
  socket.on('name', user => {
    setNewUserName(user)
  })

  console.log(newUserName)
 
  return (
    <div className="chat-room-background"> 
       <Header header="Convergence" classname="header-convergence"/>
      <div className="main">
        <div>
      <UserName onNewUser = {setCurrentUser}/><br/>
      <p>Selected username: {newUserName}</p>
      <Rules/>
      </div>
      <Chat user={newUserName}/>
      </div> 
    </div>
  )
}