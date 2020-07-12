import React, {useState} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'
//import RegistrationForm from '../views/RegistrationForm'

export default function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [err, setErr]=useState('');

    function handleSubmit(e){
        e.preventDefault();
        setErr('')
        axios.post('http://localhost:4000/api/users/login', {
            email,
            password
        }, {withCredentials:true})
            .then(()=>navigate('/chat'))
            .catch(()=> setErr('Please check your credentials!'));
    }

    return(
        <>
        <h1>Member Login</h1>
        {err && (
            <p style={{color:'red'}}>{err}</p>
        )}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                name='email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                name='password'
                type='password'
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
            </div>
            <button>Login</button>
        </form><br/>
        </>
    );
}