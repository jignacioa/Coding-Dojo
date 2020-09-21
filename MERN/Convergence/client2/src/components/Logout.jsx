import React from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

export default function LogoutButton() {
   function handleClick(){
        axios.delete('http://localhost:4000/api/users/logout', {withCredentials:true})//submit cookie with request to clear it on server
        .then(()=>navigate('/login'))
        .catch(() => console.log)//can include a catch if deployed and running client and server on different ports
    }
    return(
        <button onClick={handleClick}>Log Out</button>
    )
}